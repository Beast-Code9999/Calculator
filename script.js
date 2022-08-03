let inputBtns = [
    {
        name: "clear",
        symbol: "AC",
        operation: false,
        type: "clear",

    }, 
    {
        name: "positive or nergative",
        symbol: "±",
        operation: "plusMinus",
        type: "plusMinus"
    },
    {
        name: "percent",
        symbol: "%",
        operation: "/100",
        type: "percent",
    }, 
    {
        name: "division",
        symbol: "÷",
        operation: "/",
        type: "operator",
    },
    {
        name: "7",
        symbol: 7,
        operation: 7,
        type: "number",
    },
    {
        name: "8",
        symbol: 8,
        operation: 8,
        type: "number",
    },
    {
        name: "9",
        symbol: 9,
        operation: 9,
        type: "number",
    },
    {
        name: "multiply",
        symbol: "×",
        operation: "*",
        type: "operator",
    },
    {
        name: "4",
        symbol: 4,
        operation: 4,
        type: "number",
    },
    {
        name: "5",
        symbol: 5,
        operation: 5,
        type: "number",
    },
    {
        name: "6",
        symbol: 6,
        operation: 6,
        type: "number",
    },
    {
        name: "subtract",
        symbol: "-",
        operation: "-",
        type: "operator",
    },
    {
        name: "1",
        symbol: 1,
        operation: 1,
        type: "number",
    },
    {
        name: "2",
        symbol: 2,
        operation: 2,
        type: "number",
    },
    {
        name: "3",
        symbol: 3,
        operation: 3,
        type: "number",
    },
    {
        name: "add",
        symbol: "+",
        operation: "+",
        type: "operator",
    },
    {
        name: "zero",
        symbol: 0,
        operation: 0,
        type: "number",
    },
    {
        name: ".",
        symbol: ".",
        operation: ".",
        type: "decimal",
    },
    {
        name: "equal",
        symbol: "=",
        operation: "=",
        type: "calculate",
    },
]

const outputContainer = document.querySelector('.output-container');
const output = document.querySelector('[data-output]');
const inputContainer = document.querySelector('.input-container');


window.addEventListener('load', createButtons)

function createButtons() {
    inputBtns.forEach(button => {
        inputContainer.innerHTML += `<div data-type="${button.type}" data-operation="${button.operation}" id="${button.name}" class="button ${button.type}">
                                        ${button.symbol}
                                    </div>`;
    })
    
}

// let result = ['1', '2', '3', '4'].join('').toString();

let firstOperand = '';
let secondOperand = '';
let currentOperation = null;


inputContainer.addEventListener('click', calculator)

function calculator(e) {
    const button = e.target;
    const type = button.dataset.type;
    const operationSymbol = button.dataset.operation;
    clear(button.id)
    calcualteWhenCurrentOperationNull(type, operationSymbol)
    calculateWhenCurrentOperationNotNull(type, operationSymbol)
    adjustFont(output.textContent)

    console.log(firstOperand)
    console.log(secondOperand)
    console.log(currentOperation)

}

function calcualteWhenCurrentOperationNull(type, operationSymbol) {
    if(currentOperation === null) {
        if(type === 'number') {
            if(firstOperand === '' && operationSymbol === "0") {
                firstOperand = '';
            }
            else {
                firstOperand += operationSymbol;
                output.textContent = firstOperand;
            }
        }

        if(type === "decimal") {
            if(!firstOperand.includes('.')) {
                if(firstOperand === '') {
                    firstOperand = "0.";
                    output.textContent = firstOperand;
                }
                else {
                    firstOperand += operationSymbol;
                    output.textContent = firstOperand;
                }
            }
        }

        if(type === 'operator') {
            currentOperation = operationSymbol;
        }

        if(type === 'plusMinus') {
            if(firstOperand !== '' && firstOperand !== 0) {
                firstOperand = positiveOrNegative(firstOperand);
                output.textContent = firstOperand;
            }

        }

        if(type === "percent") {
            if(firstOperand !== '' || firstOperand !== 0) {
                firstOperand = percent(firstOperand);
                output.textContent = firstOperand;
            }
        }
    }
}

function calculateWhenCurrentOperationNotNull(type, operationSymbol) {
    if(currentOperation !== null) {
        if(type === 'number') {
            if(secondOperand === '' && operationSymbol === '0') {
                secondOperand = '';
            }
            else {
                secondOperand += operationSymbol;
                output.textContent = secondOperand;
            }    
        }

        if(type === 'plusMinus') {
            if(secondOperand !== '') {
                if(secondOperand !== '' && secondOperand !== 0) {
                    secondOperand = positiveOrNegative(secondOperand);
                    output.textContent = secondOperand;
                }
            }
        }

        if(type === "percent") {
            if(secondOperand !== '' || secondOperand !== 0) {
                secondOperand = percent(secondOperand);
                output.textContent = secondOperand;
            }
        }
        
        if(type === "decimal") {
            if(!secondOperand.includes('.')) {
                if(secondOperand === '') {
                    secondOperand = "0.";
                    output.textContent = secondOperand;
                }
                else {
                    secondOperand += operationSymbol;
                    output.textContent = secondOperand;
                }
            }
        }

        if(type === 'operator' || type === 'calculate') {
            if(type === 'operator' && secondOperand !== '' || type === "calculate" && secondOperand !== '') {
                result = operate(`${currentOperation}`, firstOperand, secondOperand);
                firstOperand = result;
                output.textContent = result; 
            }
            secondOperand = '';
            if(type !== 'calculate') currentOperation = operationSymbol;

        }

    }
}

function clear(button) {
    if(button === 'clear') {
        currentOperation = null;
        firstOperand = '';
        secondOperand = '';
        output.textContent = 0;
        output.style.fontSize = '6rem';
        
    }
}

function adjustFont(content) {
    switch(content.length) {
        case 8:
            output.style.fontSize = '5rem';
            break;
        case 9:
            output.style.fontSize = '4.5rem';
            break;
        case 10:
            output.style.fontSize = '4.25rem';
            break;
        case 11:
            output.style.fontSize = '4rem';
            break;
    }
}

function divide(initial, current) {
    return initial / current;
}

function multiply(initial, current) {
    return initial * current;
}

function subtract(initial, current) {
    return initial - current;
}

function add(initial, current) {
    return initial + current;
}


function positiveOrNegative(current) {
    if(Math.sign(current) === 1) {
        current = -current;
    }
    else if (Math.sign(current) === -1) {
        current = -current;
    }
    return current
}

function percent(current) {
    return current / 100;
}

function operate(operator, initial, current) {
    initial = +initial;
    current = +current;
    if(operator == "/") {
        return divide(initial, current);
    }
    else if(operator == "*") {
        return multiply(initial, current);
    }
    else if(operator == "-") {
        return subtract(initial, current);
    }
    else if(operator == "+") {
        return add(initial, current);
    }
}