let inputBtns = [
    {
        name: "clear",
        symbol: "AC",
        operation: false,
        type: "key",

    }, 
    {
        name: "positive or nergative",
        symbol: "±",
        operation: false,
        type: "key"
    },
    {
        name: "percent",
        symbol: "%",
        operation: "/100",
        type: "key",
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
        formula: 7,
        type: "number",
    },
    {
        name: "8",
        symbol: 8,
        formula: 8,
        type: "number",
    },
    {
        name: "9",
        symbol: 9,
        formula: 9,
        type: "number",
    },
    {
        name: "multiply",
        symbol: "×",
        formula: "*",
        type: "operator",
    },
    {
        name: "4",
        symbol: 4,
        formula: 4,
        type: "number",
    },
    {
        name: "5",
        symbol: 5,
        formula: 5,
        type: "number",
    },
    {
        name: "6",
        symbol: 6,
        formula: 6,
        type: "number",
    },
    {
        name: "subtract",
        symbol: "-",
        formula: "−",
        type: "operator",
    },
    {
        name: "1",
        symbol: 1,
        formula: 1,
        type: "number",
    },
    {
        name: "2",
        symbol: 2,
        formula: 2,
        type: "number",
    },
    {
        name: "3",
        symbol: 3,
        formula: 3,
        type: "number",
    },
    {
        name: "add",
        symbol: "+",
        formula: "+",
        type: "operator",
    },
    {
        name: "zero",
        symbol: 0,
        formula: 0,
        type: "number",
    },
    {
        name: ".",
        symbol: ".",
        formula: ".",
        type: "number",
    },
    {
        name: "equal",
        symbol: "=",
        formula: "=",
        type: "calculate",
    },
]

const outputContainer = document.querySelector('.output-container');
const output = document.querySelector('[data-output]');
const inputContainer = document.querySelector('.input-container');

window.addEventListener('load', createButtons);

function createButtons() {
    inputBtns.forEach(button => {
        inputContainer.innerHTML += `<div id="${button.name}" class="button ${button.type}">
                                        ${button.symbol}
                                    </div>`;
        const span = document.querySelector('.zero')
    })
    
}

inputContainer.addEventListener('click', (event) => {
    console.log(event.target)
})

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

function clear() {

}

function positiveOrNegative() {

}

function percent() {

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
        return subtract(initial, current)
    }
    else if(operator == "+") {
        return add(initial, current);
    }
}

console.log(operate('+', 3, 3))