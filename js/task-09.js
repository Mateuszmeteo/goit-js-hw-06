
// Napisz skrypt, który zmienia kolor tła elementu <body> 
// poprzez style inline po kliknięciu na button.change-color 
// i wprowadza wartość koloru do span.color.


// Aby wygenerować losowy kolor użyj funkcji getRandomHexColor.



const btnChange = document.querySelector('.change-color')

const spanColor = document.querySelector('.color')



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



btnChange.addEventListener('click', () => {
  // spanColor.textContent = getRandomHexColor();
  spanColor.innerHTML = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();

})




