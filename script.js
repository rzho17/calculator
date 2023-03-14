const numberButtons = document.querySelectorAll('.num');
const allBtn = document.querySelectorAll('#btn');
const clear = document.querySelector('.clear');
const delBtn = document.querySelector('.delete');
const displayNumber = document.querySelector('.displayNumber');
const previousExpression = document.querySelector('.previousExpression');
const operator = document.querySelectorAll('.operator');
const addBtn = document.querySelector('.add');
const subtractBtn = document.querySelector('.subtract');
const multiplyBtn = document.querySelector('.multiply')
const divideBtn = document.querySelector('.divide');
const decimalBtn = document.querySelector('.decimal');
const equalBtn = document.querySelector('.equal');


let initialNum = "";
let chosenOperator = "";
let emptyArr = [];
let trimmedNum = "";




for (let num of numberButtons) {
    num.addEventListener('click', (e) => {
        initialNum += num.value;
        displayNumber.textContent = initialNum;
        previousExpression.textContent = initialNum;
    })
}

divideBtn.addEventListener('click', btnOperator);

multiplyBtn.addEventListener('click', btnOperator);

subtractBtn.addEventListener('click', btnOperator)

addBtn.addEventListener('click', btnOperator)


decimalBtn.addEventListener('click', () => {
    if (initialNum.includes('.')) {
        decimalBtn.disabled = true;
    }
})

equalBtn.addEventListener('click', getOperator);

delBtn.addEventListener('click', () => {
    if (initialNum.length > 0) {
        if (initialNum.length <= 1) {
            initialNum = 0;
            displayNumber.innerText = initialNum;
        } else {
            initialNum = initialNum.toString();
            initialNum = initialNum.substring(0, initialNum.length - 1)
            displayNumber.innerText = initialNum;
        }
    }
})

function showAlert(e) {
    decimalBtn.disabled = false;
    if (initialNum !== '') {
        if (emptyArr.length === 2) {
            if (emptyArr[1] === e.target.value) {
            }
            getOperator();
        }
        else if (emptyArr.length < 1) {
            emptyArr.push(parseFloat(initialNum));
        }
        chosenOperator = e.target.value;
        initialNum = "";
        emptyArr.push(chosenOperator);
    }

    // displayNumber.textContent = emptyArr[0];
    checkDecimal();
}

function getOperator() {
    if (initialNum == 0 && chosenOperator === 'divide') {
        alert('cant do that');
        emptyArr[0] = 0;
        emptyArr.pop();
    } else {
        if (emptyArr.length !== 1 && initialNum !== '') {
            emptyArr.push(parseFloat(initialNum));
            console.log(emptyArr);
            initialNum = operate(emptyArr[0], emptyArr[1], emptyArr[2])
            emptyArr = [];
            emptyArr.push(initialNum);
            console.log(emptyArr)
            displayNumber.textContent = emptyArr[0];
        }

    }

    checkDecimal();
}

function btnOperator(e) {
    if (emptyArr[1] !== e.target.value && emptyArr.length === 2) {
        getOperator();
        console.log(emptyArr[0])
    }
    showAlert(e);
}

function checkDecimal() {
    if (initialNum !== '') {
        if (emptyArr[0].toString().includes('.')) {
            if (emptyArr[0] > 9999999999999) {
                displayNumber.textContent = emptyArr[0];
            } else {
                trimmedNum = emptyArr[0].toString();
                trimmedNum = trimmedNum.substring(0, trimmedNum.indexOf('.') + 5);
                trimmedNum = Math.round(trimmedNum * 1000) / 1000;
                displayNumber.textContent = trimmedNum;
            }
        } else {
            displayNumber.textContent = emptyArr[0];
        }
    }
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, operator, num2) {

    let num1ToNum = parseFloat(num1);
    let num2ToNum = parseFloat(num2);

    switch (operator) {
        case 'divide':
            return divide(num1ToNum, num2ToNum);
        case 'multiply':
            return multiply(num1ToNum, num2ToNum);
        case 'subtract':
            return subtract(num1ToNum, num2ToNum);
        case 'add':
            return add(num1ToNum, num2ToNum);
        default:
            return console.log("do nothing")
    }
}







