//opdracht 1
function greet() {
    console.log('Hallo wereld');
}

greet(); //functie aanroepen

//opdracht 2
function welcome() {
    
    document.body.textContent += 'Welkom bij ROC Mondriaan'
} 
// welcome(); // functie aanroepen

//opdracht 3
function calculateSum(a, b) {
    console.log('the answer is:', a + b );
    const answer = a + b;

    return answer;
}
// const result = calculateSum(3, 4);
// calculateSum(300, 412);


function complexCalculation(x, y) {
    let r = Math.pow(x,y);
    r = Math.PI *Math.exp(y);
    // ....














    return r;
}

// document.body.textContent += " "

// let resultaat = complexCalculation(17,66);
// document.body.textContent += resultaat

// document.body.textContent += " "

// resultaat = complexCalculation(123, 234);
// document.body.textContent += resultaat



function createCard() {
    const htmlCard = `<div class="card">xxxx</div>`

    return htmlCard;
}

for (let i = 0; i < 10; i++) {
    document.body.innerHTML += createCard();
}
