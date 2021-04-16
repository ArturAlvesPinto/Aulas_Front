// Aula para estudar Debugging

// Você pode usar deste exemplo simples para familiarizar com as ferramentas de debugging do browser como descrito nas Anotações-Aula

// Funcao dos botoes click
function clickButton (val) {

    //debugger;    -> Está função equivale a colocar um breakpoint
    
    const counterEl = document.querySelector('.counter'); // seleciona a class do html
    const value = parseInt (counterEl.innerText); // tranforma em int

    counterEl.innerText = value + val; // soma pelo paramentro de entrada da função e tranforma em text
}


