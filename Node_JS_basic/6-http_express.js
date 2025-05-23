// On importe le module Express
const express = require('express');

// On crée une application Express
const app = express();

// On définit une route GET sur la racine '/'
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Le serveur écoute sur le port 1245
app.listen(1245, () => {
	console.log("Server is running on port 1245");
});

// On exporte l'application pour qu'elle puisse être utilisée ailleurs
module.exports = app;
