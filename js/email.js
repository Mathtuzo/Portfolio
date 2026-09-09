/**
 * ==========================================================================
 * GESTION DU FORMULAIRE DE CONTACT AVEC EMAILJS
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact_form');
    const contactName = document.getElementById('contact_name');
    const contactEmail = document.getElementById('contact_email');
    const contactSubject = document.getElementById('contact-subject');
    const contactMessageBody = document.getElementById('contact-message-body');
    const statusMsg = document.getElementById('contact-message');
    const submitBtn = document.getElementById('contact-submit-btn');

    if (!contactForm) return;

    // Initialisation EmailJS avec la clé publique
    if (typeof emailjs !== 'undefined') {
        emailjs.init('xbFDQtb3MgdTyTQg1');
    }

    const sendEmail = (e) => {
        e.preventDefault();

        // Nettoyage des classes d'état
        statusMsg.classList.remove('success', 'error');

        // Validation des champs
        const nameVal = contactName ? contactName.value.trim() : '';
        const emailVal = contactEmail ? contactEmail.value.trim() : '';
        const subjectVal = contactSubject ? contactSubject.value.trim() : '';
        const messageVal = contactMessageBody ? contactMessageBody.value.trim() : '';

        if (!nameVal || !emailVal || !subjectVal || !messageVal) {
            statusMsg.classList.add('error');
            statusMsg.textContent = 'Veuillez renseigner tous les champs obligatoires.';
            return;
        }

        // Validation basique de l'adresse email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailVal)) {
            statusMsg.classList.add('error');
            statusMsg.textContent = 'Veuillez saisir une adresse email valide.';
            return;
        }

        // État de chargement sur le bouton
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span>Envoi en cours...</span> <i class="ri-loader-4-line ri-spin"></i>';
        }

        // Envoi via EmailJS
        emailjs.sendForm('service_o3fiywd', 'template_uo741g6', '#contact_form', 'xbFDQtb3MgdTyTQg1')
            .then(() => {
                statusMsg.classList.add('success');
                statusMsg.textContent = 'Votre message a été envoyé avec succès ! Je vous répondrai sous 24h.';

                // Réinitialisation du formulaire
                contactForm.reset();

                // Effacer le message après 6 secondes
                setTimeout(() => {
                    statusMsg.textContent = '';
                    statusMsg.classList.remove('success');
                }, 6000);
            })
            .catch((error) => {
                console.error('Erreur lors de l\'envoi du message :', error);
                statusMsg.classList.add('error');
                statusMsg.textContent = 'Une erreur est survenue lors de l\'envoi. Vous pouvez également me joindre directement par email.';
            })
            .finally(() => {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = '<span>Envoyer le message</span> <i class="ri-send-plane-fill"></i>';
                }
            });
    };

    contactForm.addEventListener('submit', sendEmail);
});
