const express = require('express');
const { faker } = require('@faker-js/faker');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Liste d'événements aléatoires
const events = [
  'rencontra un dragon terrifiant',
  'trouva une carte ancienne menant à un trésor caché',
  'fut attaqué par une horde de gobelins affamés',
  'découvrit une forêt magique où les arbres parlent',
  'rencontra un vieux sage qui lui offrit des conseils mystérieux'
];

// Liste de rebondissements pour l'histoire
const twists = [
  'mais il découvrit que l’objet magique était en réalité une malédiction.',
  'mais il ne savait pas que cet objet allait lui conférer des pouvoirs extraordinaires.',
  'et il s’avéra que ce lieu cachait un secret ancestral oublié.',
  'et il apprit que son destin était lié à cet endroit mystique.',
  'et un ennemi redoutable l’attendait au bout du chemin.'
];

app.get('/', (req, res) => {
  res.send('Bienvenue sur le serveur !');
});

app.post('/generate-story', (req, res) => {
  // Récupérer les informations envoyées par le client
  const { character, location, magicItem } = req.body;

  // Choisir un événement et un rebondissement aléatoire
  const randomEvent = events[Math.floor(Math.random() * events.length)];
  const randomTwist = twists[Math.floor(Math.random() * twists.length)];

  // Créer l'histoire en fonction des choix
  const story = `
    Il était une fois un aventurier nommé ${character}, qui se rendait dans le mystérieux ${location}. 
    En chemin, il trouva un objet magique : ${magicItem}. 
    Mais le destin avait d’autres projets pour lui, car il ${randomEvent}. 
    Cela l’amena à des découvertes inattendues. 
    ${randomTwist}
    
    L’aventurier dut alors faire face à de nombreux défis, traversant des forêts sombres et des montagnes périlleuses. 
    Il rencontra des créatures étranges, telles que des griffons majestueux et des sirènes ensorcelantes. 
    À chaque étape, ${character} utilisait ${magicItem} pour l’aider à surmonter les obstacles qui se dressaient sur son chemin.
    
    Finalement, après avoir surmonté de nombreuses épreuves, ${character} se retrouva face à un choix crucial :
    soit il détruisait ${magicItem} pour éviter qu’il ne tombe entre de mauvaises mains, 
    soit il l’utilisait pour gagner un pouvoir immense, mais à un prix terrible.
    
    Le sort de ${character} était désormais entre ses mains, et son aventure n'était pas près de se terminer…
  `;

  // Retourner l'histoire générée sous forme de réponse JSON
  res.json({ story });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
