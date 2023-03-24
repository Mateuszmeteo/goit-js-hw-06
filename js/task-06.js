// Napisz skrypt, który przy utracie fokusu 
// na polu input (zdarzenie blur) sprawdza jego zawartość na prawidłową 
// liczbę wprowadzonych symboli.


// Informacja o liczbie symboli, która powinna znajdować się w polu input, 
// pokazuje się w jego atrybucie data-length.

// Jeśli wprowadzono odpowiednią liczbę symboli, 
// to border pola input staje się zielone, 
// a jeśli liczba jest nieprawidłowa - czerwone.

// Aby dodać style, używaj klas CSS valid i invalid, 
// które już dodaliśmy do plików źródłowych zadania.



// if data-length jest 6 - border zielony
// else data-length jest inne niz 6 - border czerwony


const inputPlace = document.querySelector('#validation-input')


inputPlace.addEventListener('blur', () => {
    inputPlace.value.length === +inputPlace.dataset.length
    ? (inputPlace.className = 'valid') : (inputPlace.className = 'invalid');
})







// inputPlace.addEventListener('blur', () => {
//     if (inputPlace.value.length === +inputPlace.dataset.length) {
//         inputPlace.classList.add('valid');
//     } inputPlace.classList.add('invalid');
// })



// inputPlace.addEventListener('blur', event => {
//     if (event.textContent === '6') {
//         inputPlace.classList.add('valid')
//     } inputPlace.invalid 
// })





// inputPlace.addEventListener('blur', () => {
//     if (inputPlace.textContent === inputPlace.data-length) {
//         inputPlace.classList.add('valid')
//     } inputPlace.invalid 
// })




// const textInput = document.querySelector('#validation-input');

// textInput.addEventListener('blur', event => {
//   if (
//     event.currentTarget.value.length ===
//     Number(event.currentTarget.dataset.length)
//   ) {
//     textInput.classList.add('valid');
//     textInput.classList.remove('invalid');
//   } else {
//     textInput.classList.add('invalid');
//     textInput.classList.remove('valid');
//   }
// });