import fs from 'fs';

// Read the database file and return the parsed JSON object
const readDatabase = (path) => new Promise((resolve, reject) => {
  if (!path) {
    reject(new Error('Cannot load the database'));
  } else {
    fs.readFile(path, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const fileLines = data
          .toString('utf-8') // Convert Buffer to string
          .trim() // Remove white spaces
          .split('\n'); // Split string into array

        const studentGroups = {}; // Create an empty object for student groups
        const dbFieldNames = fileLines[0].split(',');
        const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

        fileLines.slice(1).forEach((line) => { // Skip the first line
          const studentRecord = line.split(',');
          const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
          const field = studentRecord[studentRecord.length - 1];

          if (!studentGroups[field]) {
            studentGroups[field] = [];
          }

          const studentEntries = studentPropNames.map((propName, idx) => [propName, studentPropValues[idx]]);
          studentGroups[field].push(Object.fromEntries(studentEntries));
        });

        resolve(studentGroups);
      }
    });
  }
});

export default readDatabase;
module.exports = readDatabase;
