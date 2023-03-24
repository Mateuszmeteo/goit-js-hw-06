// Napisz skrypt, który reaguje na zmianę wartości
//  input#font-size-control (zdarzenie input) 
//  i zmienia styl inline span#text 
//  aktualizując właściwość font-size. 
//  W rezultacie, podczas przeciągania paska przesuwania będzie zmieniał się rozmiar tekstu.



const inputRange = document.querySelector('#font-size-control')

const spanText = document.querySelector('#text')

inputRange.addEventListener('input', (event) => {
    spanText.style.fontSize = event.currentTarget.value + 'px'
})