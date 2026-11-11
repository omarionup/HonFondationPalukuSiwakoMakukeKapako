// ===== GESTION DU FORMULAIRE DE CONTACT =====

document.addEventListener('DOMContentLoaded', function() {
  const formContact = document.getElementById('form-contact');
  const confirmation = document.getElementById('message-confirmation');
  
  if (formContact) {
    formContact.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const nom = document.getElementById('nom').value;
      const contact = document.getElementById('email').value;
      const sujet = document.getElementById('sujet').value;
      const message = document.getElementById('message').value;
      
      const nouveauMessage = {
        nom: nom,
        contact: contact,
        sujet: sujet,
        message: message,
        date: new Date().toLocaleDateString('fr-FR')
      };
      
      // Sauvegarder dans la file d'attente (en attente d'approbation)
      const messagesEnAttente = JSON.parse(localStorage.getItem('messages') || '[]');
      messagesEnAttente.push(nouveauMessage);
      localStorage.setItem('messages', JSON.stringify(messagesEnAttente));
      
      // Afficher confirmation
      confirmation.style.display = 'block';
      
      // Réinitialiser le formulaire
      formContact.reset();
      
      // Cacher le message après 8 secondes
      setTimeout(() => {
        confirmation.style.display = 'none';
      }, 8000);
    });
  }
});
