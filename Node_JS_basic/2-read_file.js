const fs = require('fs');

function countStudents(path) {
	try {
		const data = fs.readFileSync(path, 'utf8');
		const lines = data.split('\n').filter(line => line.trim() !== '');
		const students = lines.slice(1);
		const fields = {};

		for (const line of students) {
			const parts = line.split(',');
			const firstName = parts[0];
			const field = parts[3];

			if (!fields[field]) fields[field] = [];
			fields[field].push(firstName);
		}

		console.log(`Number of students: ${students.length}`);
		for (const [field, names] of Object.entries(fields)) {
			console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
		}

	} catch (err) {
		throw new Error('Cannot load the database');
	}
}

module.exports = countStudents;
