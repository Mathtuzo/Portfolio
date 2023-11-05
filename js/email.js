const contactForm = document.getElementById('contact_form'),
      contactName = document.getElementById('contact_name'),
      contactEmail = document.getElementById('contact_email'),
      contactSubject = document.getElementById('contact-subject'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault();

    // check si le champs a une valeur
    if (contactName.value ==='' || contactEmail.value ==='' || contactSubject.value ==='' || contactMessage.value === ''){
        // add remove 
        contactMessage.classList.remove('color-blue');
        contactMessage.classList.add('color-red');

        // show message
        contactMessage.textContent = 'Tous les champs doivent être remplie pour envoyer un message'
    }else{
        // serviceID - templateID - #form - publickey
        emailjs.sendForm('service_o3fiywd', 'template_uo741g6', '#contact_form', 'xbFDQtb3MgdTyTQg1')
            .then(() =>{
                //emvoyer le message et mettre de couleur
                contactMessage.classList.add('color-blue')
                contactMessage.textContent = 'Message envoyé ✔'

                // effacer le message apres 7 secondes
                setTimeout(() =>{
                    contactMessage.textContent = ''
                },6000)
            }, (error) =>{
                alert('L envoie a echoué ...', error)
            })

        // effacer les chSamps 
        contactName.value = ''
        contactEmail.value = ''
        contactSubject.value = ''
    }
}
contactForm.addEventListener('submit', sendEmail)
