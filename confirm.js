
// (1) Lier les labels aux entrées dans le HTML en utilisant les attributs "for" et "id" dans le code existant. Corrigez le code HTML si nécessaire.

// FAITS 

// (2) Utiliser JavaScript pur (pas de jQuery) pour terminer le formulaire :

const btnClose = document.getElementById("close");
const formConfirmation = document.getElementById("formConfirmation");

  // Utilisation des expressions régulières (regex) pour les validations
const nameRegex = /^[A-Za-z-]+$/;
const emailRegex = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
const birthdateRegex = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
const quantityRegex = /^[0-9]+$/;

// Messages d'erreurs pour les validations
const Errors = {
  nameError: "Le champ doit avoir au moins 2 lettres.",
  nameRegexError: "Le nom doit comporter des lettres ou des tirets uniquement.",
  emailError: "Veuillez entrer une adresse email valide.",
  birthdateError: "Veuillez entrer une date de naissance valide (format YYYY-MM-DD).",
  birthdateError2: "Vous devez avoir au moins 16 ans pour participer.",
  quantityError: "Veuillez entrer un nombre.",
  locationError: "Veuillez choisir une ville."
};


// Le formulaire doit être valide quand l'utilisateur clique sur "Soumettre"

 // Fonction pour fermer la fenêtre modale en cliquant sur le bouton "X"
 function closeModal() {
    modalbg.style.display = "none";
    document.getElementById("myForm").reset();
  }
  btnClose.addEventListener("click", closeModal);
  
  // Utilisation des expressions régulières (regex) pour les validations
  
  // Validation du formulaire lors de la soumission (submit)
  let myForm = document.getElementById("myForm");
  myForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Empêche le rechargement de la page par défaut
  });

  
// Les données doivent être saisies correctement :
// (1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
// (2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
// (3) L'adresse électronique est valide.
// (4) Pour le nombre de concours, une valeur numérique est saisie.
// (5) Un bouton radio est sélectionné.
// (6) La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.
// Conserver les données du formulaire (ne pas effacer le formulaire) lorsqu'il ne passe pas la validation.