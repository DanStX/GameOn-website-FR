
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
    if (formConfirm()) {
        closeModal();
        launchConfirmation();
      }
    });
    
    // Fonction pour valider le formulaire
    function formConfirm() {
       firstConfirm();
       lastConfirm();
        emailConfirm();
       birthdateConfirm();
       quantityConfirm();
       locationConfirm();
    
      return (
        firstConfirm() &&
        lastConfirm() &&
        emailConfirm() &&
        birthdateConfirm() &&
        quantityConfirm() &&
        locationConfirm()
      );
    }

  // Les données doivent être saisies correctement :
  
  // (1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
// ############################ FirstName ######################  

// (1) Validation du champ "Prénom" (firstName)
function firstConfirm() {
    let first = document.getElementById("first");
    let myErrorFirst = document.getElementById("errorFirst");
    
    // - si la valeur dans le champs est supérieur à 2 caractères et 
    if (first.value.length < 2) {
      // - on affiche un message d'erreur et le cadre du champs devient rouge
      myErrorFirst.innerHTML = Errors.nameError;
      first.style.border = "1px solid red";
      myErrorFirst.style.color = "red";
      return false;
      
      // - si la valeur saisie ne correspond pas aux conditions du regex avec la méthode test()
    } else if (!nameRegex.test(first.value)) {
      // - on affiche un message d'erreur et le cadre du champs devient rouge
      myErrorFirst.innerHTML = Errors.nameRegexError;
      first.style.border = "1px solid red";
      myErrorFirst.style.color = "red";
      return false;
      
    } else {
        
        myErrorFirst.innerHTML = "";
        first.style.border = "1px solid white";
        return true;
    }
}

// (2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
  // ############################ LastName ######################  
  // (2) Validation du champ "Nom de famille" (lastName)
  function lastConfirm() {
    let last = document.getElementById("last");
    let myErrorLast = document.getElementById("errorLast");
    // - si la valeur dans le champs est supérieur à 2 caractères et 
      if (last.value.length < 2) {
        // - on affiche un message d'erreur et le cadre du champs devient rouge
        myErrorLast.innerHTML = Errors.nameError;
        last.style.border = "1px solid red";
        myErrorLast.style.color = "red";
        return false;
      // - si la valeur saisie ne correspond pas aux conditions du regex avec la méthode test()
      } else if (!nameRegex.test(last.value)) {
        // - on affiche un message d'erreur et le cadre du champs devient rouge
        myErrorLast.innerHTML = Errors.nameRegexError;
        last.style.border = "1px solid red";
        myErrorLast.style.color = "red";
        return false;
      } else {
        myErrorLast.innerHTML = "";
        last.style.border = "1px solid white";
        return true;
      }
    }
    
    // (3) L'adresse électronique est valide.
// ############################ Email ######################  

  // (3) Validation du champ "Adresse électronique" (email)
  function emailConfirm() {
    let email = document.getElementById("email");
    let myErrorEmail = document.getElementById("errorEmail");
    // si la valeur saisie ne correspond pas aux conditions du regex:
    if (!emailRegex.test(email.value)) {
      // - on affiche un message d'erreur et le cadre du champs devient rouge
      myErrorEmail.innerHTML = Errors.emailError;
      myErrorEmail.style.color = "red";
      email.style.border = "1px solid red";
      return false;
    } else {
      // sinon laisse le blanc
      myErrorEmail.innerHTML = "";
      email.style.border = "1px solid white";
      return true;
    }
  }

  // ############################ birthdate ######################  

 // (4) Validation du champ "Date de naissance" (birthdate)
function birthdateConfirm() {
  const birthdate = document.getElementById("birthdate");
  const myErrorBirthDate = document.getElementById('errorBirthdate');
  const vari = new Date(birthdate.value);
  // La getFullYear()méthode des Dateinstances renvoie l'année pour cette date en fonction de l'heure locale.
  const currentYear = new Date().getFullYear(); 

  if (!birthdateRegex.test(birthdate.value)) {
     // - on affiche un message d'erreur et le cadre du champs devient rouge
    myErrorBirthDate.innerHTML = Errors.birthdateError;
    myErrorBirthDate.style.color = "red";
    birthdate.style.border = '1px solid red';
    return false;
  } else if (currentYear - vari.getFullYear() < 16) {
     // - on affiche un message d'erreur et le cadre du champs devient rouge
    myErrorBirthDate.innerHTML = Errors.birthdateError2;
    myErrorBirthDate.style.color = "red";
    birthdate.style.border = '1px solid red';
    return false;
  } else {
    myErrorBirthDate.innerHTML = "";
    birthdate.style.border = '1px solid white';
    return true;
  }
}
  
// (5) Pour le nombre de concours, une valeur numérique est saisie.
  // ############################ Quantity ######################  

    // (5) Validation du champ "Nombre de concours" (quantity)
    function quantityConfirm() {
        let quantity = document.getElementById("quantity");
        let myErrorQuantity = document.getElementById("errorQuantity");
        
        if (!quantityRegex.test(quantity.value)) {
          // - on affiche un message d'erreur et le cadre du champs devient rouge
          myErrorQuantity.innerHTML = Errors.quantityError;
          myErrorQuantity.style.color = "red";
          quantity.style.border = "1px solid red";
          return false;
        } else {
          myErrorQuantity.innerHTML = "";
          quantity.style.border = "1px solid white";
          return true;
        }
      }
// (6) Un bouton radio ville est à sélectionné.
 // ############################ Ville ######################  
    
    //  Une ville est sélectionnée.
    function locationConfirm() {
        const locations = document.getElementsByName("locations");
        for (let i = 0; i < locations.length; i++) {
          if (locations[i].checked) {
            let myErrorLocation = document.getElementById('errorLocation');
            myErrorLocation.innerHTML = "";
            return true;
          }
        }
      let myErrorLocation = document.getElementById('errorLocation');
        // - on affiche un message d'erreur et le cadre du champs devient rouge
        myErrorLocation.innerHTML = Errors.locationError;
        myErrorLocation.style.color = "red";
        return false;
      }
// (7) La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.



   // ############################ Modal de remerciment ######################  
  
  // Fonction pour afficher la confirmation du formulaire
  function launchConfirmation() {
    formConfirmation.style.display = "block";
  }
  
  // Fonction pour masquer la confirmation du formulaire
  function closeConfirmation() {
    formConfirmation.style.display = "none";
  }
// Conserver les données du formulaire (ne pas effacer le formulaire) lorsqu'il ne passe pas la validation.