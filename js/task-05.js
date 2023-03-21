// Napisz skrypt, który przy wpisywaniu tekstu w polu input 
// input#name-input (zdarzenie input) wstawia jego aktualną wartość do 
// span#name-output. 
// Jeśli pole input jest puste, 
// w spanie powinien wyświetlić się komunikat "Anonymous".



const inputName = document.querySelector('#name-input');

const inputSpan = document.querySelector('#name-output');

inputName.addEventListener('input', (event) => {
    if (event.currentTarget.value) {
        inputSpan.textContent = event.currentTarget.value
    } else inputSpan.textContent = "Anonymous"
     
})

// dodac if bo nie dzaiał powrot do tekstu




// const value = 




// text.content do inputSpan 