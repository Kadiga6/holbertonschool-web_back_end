console.log("Welcome to Holberton School, what is your name?");

process.stdin.resume(); // Démarre la lecture de l'entrée utilisateur
process.stdin.setEncoding('utf8'); // Définit l'encodage en UTF-8

process.stdin.on('data', (input) => {
  console.log("Your name is: " + input.trim());
  // Optionnel : process.stdin.end(); // Pour clôturer automatiquement après une saisie
});

process.stdin.on('end', () => {
  console.log("This important software is now closing");
});
