const express = require('express');        // Importer Express
const fs = require('fs').promises;         // Utiliser les promesses pour lire les fichiers
const app = express();                      // Créer une instance d’Express

// Fonction pour compter les étudiants depuis un fichier CSV
async function countStudents(path) {
	try {
		const data = await fs.readFile(path, 'utf-8');  // Lire le fichier de façon asynchrone
		const lines = data.trim().split('\n');          // Séparer en lignes
		const students = lines.slice(1);                 // Enlever l’en-tête
		const fields = {};                               // Stocker les étudiants par filière

		for (const student of students) {
			if (student.trim() === '') continue;          // Ignorer les lignes vides
			const parts = student.split(',');
			const field = parts[3];
			const firstName = parts[0];
			if (!fields[field]) fields[field] = [];
			fields[field].push(firstName);
		}

		let response = `Number of students: ${students.length}\n`;
		for (const field in fields) {
			response += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
		}
		return response.trim();
	} catch (err) {
		throw new Error('Cannot load the database');
	}
}

// Route racine qui affiche un message simple
app.get('/', (req, res) => {
	res.send('Hello Holberton School!');
});

// Route /students qui affiche la liste des étudiants
app.get('/students', async (req, res) => {
	const dbPath = process.argv[2];  // Le fichier CSV est passé en argument lors du lancement
	try {
		const result = await countStudents(dbPath);
		res.send(`This is the list of our students\n${result}`);
	} catch (error) {
		res.status(500).send(error.message);
	}
});

// Écouter sur le port 1245
app.listen(1245, () => {
	console.log('Server is running on port 1245');
});

module.exports = app;  // Exporter app pour tests ou utilisation externe
