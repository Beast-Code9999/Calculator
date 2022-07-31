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
        operation: "−",
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
        type: "number",
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

window.addEventListener('load', createButtons);

function createButtons() {
    inputBtns.forEach(button => {
        inputContainer.innerHTML += `<div data-operation="${button.operation}" id="${button.name}" class="button ${button.type}">
                                        ${button.symbol}
                                    </div>`;
    })
    
}

inputContainer.addEventListener('click', calculate);

// crate a array to store the data for both previous and current data
let data = {
    initial : [],
    current : [],
}

function calculate(e) {
    const button = e.target;
    console.log(button)
    const numberBtn = e.target.className;
    const operatorBtn = 3;
}

// get input numbers and where all calculations are contained
// function getInput(event) {
//     const type = event.target.className.split(' ')[1];
//     const operatorSymbol = event.target.dataset.operation;
//     let initial = data.initial.join('');
//     let current = data.current.join('');

//     if(type === 'number') {
//         data.current.push(event.target.innerText); 
//         output.textContent = data.current.join('');
//     }
    
//     adjustFont(data.current);
    
//     if(type === 'operator') { 
//         if(data.initial.length === 0) {
//             data.initial = data.current;
//             data.current = [0];
//             output.textContent = 0;
//         }
//         else if (data.initial.length !== 0 && data.current.length !== 0) {
//             console.log(operatorSymbol)
//             let result = operate(`${operatorSymbol}`, initial, current);
//             data.initial = [`${result}`]
//             data.current = [];
//             output.textContent = result;
//         }
        
//     }// require debugging
    
//     clear(type, event.target.id)
//     console.log('data current: ', data.current, data.current.length)
//     console.log('data initial: ', data.initial, data.initial.length)
// }



function clear(type, target) {
    if(type === 'key' && target === 'clear') {
        data.current = [];
        data.initial = [];
        output.textContent = 0;
    }
}

adjustFont(output)

function adjustFont(data) {
    switch(data.length) {
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