// app.js

// Déclaration des éléments des pages
const accueilPage = document.getElementById("accueil-page");
const personnagesPage = document.getElementById("personnages-page");
const lieuxPage = document.getElementById("lieux-page");
const objetsPage = document.getElementById("objets-page");
const histoirePage = document.getElementById("histoire-page");

// Bouton pour commencer l'exploration
document.getElementById("explore-button").addEventListener("click", () => {
  accueilPage.style.display = "none";
  personnagesPage.style.display = "block";
});

// Bouton pour passer à la page Lieux
document.getElementById("next-personnage").addEventListener("click", () => {
  personnagesPage.style.display = "none";
  lieuxPage.style.display = "block";
});

// Bouton pour passer à la page Objets
document.getElementById("next-lieux").addEventListener("click", () => {
  lieuxPage.style.display = "none";
  objetsPage.style.display = "block";
});

// Générer l'histoire
document.getElementById("generate-story").addEventListener("click", async () => {
  const character = document.getElementById("character").value;
  const location = document.getElementById("location").value;
  const magicItem = document.getElementById("magic-item").value;

  try {
    const response = await fetch('http://localhost:3001/generate-story', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ character, location, magicItem }),
    });

    const data = await response.json();
    if (data && data.story) {
      document.getElementById("story").textContent = data.story;
    } else {
      document.getElementById("story").textContent = "Une erreur est survenue.";
    }

    // Afficher la page Histoire
    objetsPage.style.display = "none";
    histoirePage.style.display = "block";
  } catch (error) {
    console.error("Erreur lors de la génération de l'histoire :", error);
    document.getElementById("story").textContent = "Une erreur est survenue.";
  }
});
