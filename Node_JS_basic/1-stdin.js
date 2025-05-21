console.log("Welcome to Holberton School, what is your name?");


process.stdin.resume();  // Démarre la lecture de stdin
process.stdin.setEncoding('utf8');  // Assure que l'entrée est en texte


process.stdin.on('data', (input) => {
	console.log("Your name is: " + input.trim())
});

process.stdin.on('end', () => {
	console.log("This important software is now closing")
});
