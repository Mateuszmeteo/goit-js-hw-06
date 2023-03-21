// Licznik składa się ze spana i przycisków, które, po ich kliknięciu,
//  powinny zwiększać i zmniejszać jego wartość na jednostkę.

// Utwórz zmienną counterValue w której będzie przechowywana 
// aktualna wartość licznika i inicjalizuj wartość 0.


// Dodaj click listeners do przycisków, 
// wewnątrz których zwiększaj i zmniejszaj wartość licznika.
// Aktualizuj interfejs nową wartością zmiennej counterValue.




// pobrac - querySel - przyciski i value 

// zmienna z zadania

// zmienna do nowego value 

// 1 event - pętla odejmuje jeden

// 2 event - pętla dodaje 1

// do value musi być wrzucone nowe value przy obu event


const btnDown = document.querySelector('[data-action="decrement"]')

const btnUp = document.querySelector('[data-action="increment"]')

const number = document.querySelector('#value')

let counterValue = 0;

btnDown.addEventListener('click', () => {
    counterValue -= 1;
    number.textContent = counterValue;
})

btnUp.addEventListener('click', () => {
    counterValue += 1;
    number.textContent = counterValue;
})