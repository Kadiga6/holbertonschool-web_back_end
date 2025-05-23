// 1. On importe le module http de Node.js
const http = require('http');

// 2. On crée le serveur HTTP
const app = http.createServer((req, res) => {
  // 3. On définit l'en-tête HTTP avec le code 200 (OK) et le type de contenu texte brut
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // 4. On écrit la réponse envoyée au client
  res.write('Hello Holberton School!');

  // 5. On termine la réponse
  res.end();
});

// 6. Le serveur écoute sur le port 1245
app.listen(1245);

// 7. On exporte le serveur pour pouvoir l'utiliser ailleurs si besoin
module.exports = app;
