// Napisz skrypt, który:

// Policzy i wprowadzi do wiersza poleceń liczbę kategorii w ul#categories, czyli elementy li.item.

// Dla każdego elementu li.item na liście ul#categories, znajdzie i wprowadzi do wiersza poleceń tekst nagłówka elementu (tag <h2>) i liczbę elementów w kategorii (wszystkich <li>).

// W konsekwencji, w wierszu poleceń znajdą się takie komunikaty.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5


// return "text ${zmienna}"



const nrOfCat = document.querySelectorAll('.item')
    // return Number of categories: ${nrOfCat}
    console.log(`Number of categories: ${nrOfCat.length}`);


    // const categoryHeader = document.querySelector('h2')
    // // console.log(categoryHeader)
    // console.log(`Category: ${categoryHeader.textContent}`)



    // const categoryEl = document.querySelectorAll('li')
    // // console.log(categoryEl)
    // console.log(`Elements: ${categoryEl.length}`)


    nrOfCat.forEach(element => {
        
    const categoryHeader = element.querySelector('h2')
    // console.log(categoryHeader)
    console.log(`Category: ${categoryHeader.textContent}`)

    const categoryEl = element.querySelectorAll('li')
    // console.log(categoryEl)
    console.log(`Elements: ${categoryEl.length}`)
  });