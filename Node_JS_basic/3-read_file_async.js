const fs = require('fs'); // Import du module 'fs' pour lire les fichiers

function countStudents(path) {
  return new Promise((resolve, reject) => {
    // Lecture asynchrone du fichier
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        // Si erreur (ex: fichier introuvable), rejeter la promesse avec un message
        reject(new Error('Cannot load the database'));
        return;
      }

      // Découper le contenu en lignes et filtrer les lignes vides
      const lines = data.split('\n').filter(line => line.trim() !== '');

      // Supprimer la première ligne (en-têtes CSV)
      const header = lines.shift();

      const fields = {}; // Objet pour stocker les étudiants par domaine (CS, SWE, etc.)
      let total = 0; // Compteur total d'étudiants

      for (const line of lines) {
        const parts = line.split(','); // Séparer les valeurs CSV
        const firstName = parts[0]; // prénom
        const field = parts[3]; // domaine (ex: CS, SWE)

        if (field) {
          if (!fields[field]) {
            fields[field] = []; // Initialiser un tableau si le domaine n'existe pas encore
          }
          fields[field].push(firstName); // Ajouter le prénom à la bonne catégorie
          total += 1; // Incrémenter le nombre total
        }
      }

      console.log(`Number of students: ${total}`);
      for (const [field, names] of Object.entries(fields)) {
        console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }

      resolve(); // Résolution de la promesse (pas de valeur nécessaire ici)
    });
  });
}

module.exports = countStudents; // Exporter la fonction pour qu'elle soit utilisée das d'autres fichiers
