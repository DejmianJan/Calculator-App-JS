const currentNumber = document.querySelector('.current__number');
const previousNumber = document.querySelector('.previous__number');
const mathSign = document.querySelector('.math__sign');
const numbersButtons = document.querySelectorAll('.number');
const mathSignButton = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');


const calculatorHistory = document.querySelector('.calculator__history')
const calculatorHistoryItem = document.querySelector('.calculator__history ul')
const historyBtn = document.querySelector('.history__btn');
const arrowUp = document.querySelector('.arrow__up');
const arrowDown = document.querySelector('.arrow__down');

let result = '';

// Functions
function displayNumbers() {
    if(this.textContent === '.' && currentNumber.innerHTML.includes('.'))return;
    if(this.textContent === '.' && currentNumber === '') return;
    currentNumber.innerHTML += this.textContent;
}


function operate(){
    if(currentNumber.innerHTML === '' && this.textContent === '-'){
        currentNumber.innerHTML = '-';
        return;
    } else if (currentNumber.innerHTML === ''){
        return;
    }
    if(mathSign.innerHTML !== ''){
         showResult(); 
    }
    
    previousNumber.innerHTML = currentNumber.innerHTML;
    mathSign.innerHTML = this.textContent;
    currentNumber.innerHTML = '';
}

function showResult(){
    if(previousNumber.innerHTML === '' || currentNumber.innerHTML === '')return;

    let a = Number(currentNumber.innerHTML);
    let b = Number(previousNumber.innerHTML);
    let operator = mathSign.innerHTML;

    switch(operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = b - a;
            break;
        case 'x':
            result = a * b;
            break;
        case '/':
            result = b / a;
            break;
        case '2^':
            result = b ** a;
            break;

    }
    addToHistory();
    currentNumber.innerHTML = result;
    previousNumber.innerHTML = '';
    mathSign.innerHTML = '';
    
}


function clearScreen(){
    currentNumber.innerHTML = '';
    previousNumber.innerHTML = '';
    mathSign.innerHTML = '';
}

function showHistory(){
    
    arrowUp.classList.toggle('active');
    arrowDown.classList.toggle('active');
    calculatorHistory.classList.toggle('active');
}

function addToHistory(){
    const newHistoryItem = document.createElement('li');
    newHistoryItem.innerHTML = `
    ${previousNumber.innerHTML}
    ${mathSign.innerHTML}
    ${currentNumber.innerHTML} =
    ${result}`
    
    calculatorHistoryItem.appendChild(newHistoryItem);
}
// Listeners

historyBtn.addEventListener('click', showHistory);



equalsButton.addEventListener('click', showResult);
clearButton.addEventListener('click', clearScreen)
numbersButtons.forEach((button) => {
    button.addEventListener('click', displayNumbers);
});

mathSignButton.forEach((button) => button.addEventListener('click', operate));



