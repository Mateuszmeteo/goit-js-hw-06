// Opracowanie przesyłania formularza form.login-form powinno 
// przebiegać zgodnie ze zdarzeniem submit.

// Podczas przesyłania formularza strona nie powinna się restartować.

// Jeśli w formularzu są nieuzupełnione pola, wprowadź alert z upomnieniem o tym, 
// że wszystkie pola powinny zostać wypełnione.

// Jeśli użytkownik uzupełnił wszystkie pola i wysłał formularz, 
// zbierz wartość pól jako obiekt, gdzie nazwa pola będzie nazwą właściwości, 
// a wartość pola - wartością właściwości. 
// Aby otrzymać dostęp do elementów formularza użyj właściwości elements.

// Umieść obiekt z wprowadzonymi danymi do wiersza poleceń 
// i wyczyść wartości pól formularza metodą reset.


const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const {elements: {email, password}} = event.currentTarget

    if (email.value === "" || password.value === "") {
        // return alert ('hopsa')
        alert ('Proszę uzupełnić wszystkie pola!')
    }
  console.log(email.value, password.value);
  form.reset();
})




// console.log('Email: ${email.value}', password.value)
    // reset 

