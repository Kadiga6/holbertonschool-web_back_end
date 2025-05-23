// Importation des modules nécessaires
const http = require('http'); // pour créer le serveur HTTP
const fs = require('fs'); // pour lire les fichiers
const path = require('path');

// Fonction asynchrone pour compter les étudiants dans le fichier CSV
function countStudents(filepath) {
	return new Promise((resolve, reject) => {
		fs.readFile(filepath, 'utf8', (err, data) => {
			if (err) {
				reject(new Error('Cannot load the database'));
				return;
			}

			const lines = data.trim().split('\n');
			const students = lines.slice(1).filter(line => line.trim() !== '');
			const fields = {};

			for (const student of students) {
				const parts = student.split(',');
				const firstname = parts[0];
				const field = parts[3];
				if (!fields[field]) fields[field] = [];
				fields[field].push(firstname);
			}

			let result = `Number of students: ${students.length}`;
			for (const field in fields) {
				result += `\nNumber of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`;
			}

			resolve(result);
		});
	});
}

// Création du serveur HTTP
const app = http.createServer((req, res) => {
	const dbPath = process.argv[2]; // Récupère le nom de fichier passé en argument

	if (req.url === '/') {
		res.writeHead(200, { 'Content-Type': 'text/plain' });
		res.end('Hello Holberton School!');
	} else if (req.url === '/students') {
		res.writeHead(200, { 'Content-Type': 'text/plain' });
		res.write('This is the list of our students\n');
		countStudents(dbPath)
			.then((output) => {
				res.end(output);
			})
			.catch((err) => {
				res.end(err.message);
			});
	} else {
		// Si autre route, retourne une erreur 404
		res.writeHead(404);
		res.end('Not found');
	}
});

// Le serveur écoute sur le port 1245
app.listen(1245);

// On exporte le serveur (utile pour les tests automatisés ou l'importation dans un autre fichier)
module.exports = app;
