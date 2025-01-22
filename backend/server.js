const express = require('express');
const { faker } = require('@faker-js/faker');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Route GET à la racine
app.get('/', (req, res) => {
  res.send('Bienvenue sur le serveur !');
});

// Route POST pour générer une histoire magique
app.post('/generate-story', (req, res) => {
  // Récupérer les informations envoyées par le client
  const { character, location, magicItem } = req.body;

  // Créer l'histoire en fonction des choix
  const story = `Il était une fois un aventurier nommé ${character}, qui se rendait dans le mystérieux ${location}. En chemin, il trouva un objet magique : ${magicItem}.`;

  // Retourner l'histoire générée sous forme de réponse JSON
  res.json({ story });
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
