import readDatabase from '../utils';

/**
 * The list of supported majors.
 */
const VALID_MAJORS = ['CS', 'SWE'];

/**
 * This function returns and displays the number of students in the field
 * and the list of first names (ordered by appearance in the database file).
 * @author: Alex Arévalo <https://github.com/Alexoat76>
 */
class StudentsController { 
  // Class to handle the students controller
  static getAllStudents(request, response) {
    const dataPath = process.argv.length > 2 ? process.argv[2] : '';

    readDatabase(dataPath)
      .then((studentGroups) => {
        const responseParts = ['This is the list of our students'];

        // Comparison function for ordering a list of strings alphabetically (case-insensitive)
        const compareFunct = (a, b) => {
          return a[0].toLowerCase().localeCompare(b[0].toLowerCase());
        };

        // Iterate through each field in the student groups object (sorted by field name)
        for (const [field, group] of Object.entries(studentGroups).sort(compareFunct)) {
          responseParts.push(`Number of students in ${field}: ${group.length}. List: ${group.map((student) => student.firstname).join(', ')}`);
        }

        response.status(200).send(responseParts.join('\n'));
      })
      .catch((err) => {
        response.status(500).send(err instanceof Error ? err.message : err.toString());
      });
  }

  // Function to handle the route to get all students by major
  static getAllStudentsByMajor(request, response) {
    const path = process.argv.length > 2 ? process.argv[2] : '';
    const { major } = request.params;

    if (!VALID_MAJORS.includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(path)
      .then((studentGroups) => {
        let responseText = '';

        if (studentGroups[major]) {
          responseText = `List: ${studentGroups[major].map((student) => student.firstname).join(', ')}`;
        }

        response.status(200).send(responseText);
      })
      .catch((err) => {
        response.status(500).send(err instanceof Error ? err.message : err.toString());
      });
  }
}

export default StudentsController;
module.exports = StudentsController;
