const express = require('express');
const { faker } = require('@faker-js/faker');  // Importation de Faker.js

const app = express();
const port = 3001;  // Vous pouvez changer ce port si nécessaire

// Middleware pour analyser le corps des requêtes JSON
app.use(express.json());

// Route GET à la racine
app.get('/', (req, res) => {
  res.send('Bienvenue sur le serveur !');
});

// Route POST pour générer une histoire magique
app.post('/generate-story', (req, res) => {
  // Générer un personnage aléatoire
  const character = faker.name.fullName();  // Utilisation de fullName() au lieu de findName()

  // Générer un lieu magique aléatoire
  const location = faker.address.city();  // Génère un nom de ville aléatoire

  // Générer un objet magique aléatoire
  const magicItem = faker.commerce.productName();  // Produit aléatoire utilisé comme objet magique
  
  // Créer l'histoire
  const story = `Il était une fois un aventurier nommé ${character}, qui se rendait dans le mystérieux ${location}. En chemin, il trouva un objet magique : ${magicItem}.`;

  // Retourner l'histoire générée sous forme de réponse JSON
  res.json({ story });
});

// Démarrer le serveur sur le port spécifié
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});