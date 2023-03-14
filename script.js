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
let tempNum = "";
let otherNum = "";




for (let num of numberButtons) {
    num.addEventListener('click', (e) => {
        initialNum += num.value;
        displayNumber.textContent = initialNum;
        // tempNum = initialNum;
        previousExpression.textContent = `${tempNum} ${chosenOperator}`;
    })
}

divideBtn.addEventListener('click', btnOperator);

multiplyBtn.addEventListener('click', btnOperator);

subtractBtn.addEventListener('click', btnOperator);

addBtn.addEventListener('click', btnOperator);


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
    tempNum = initialNum;

    decimalBtn.disabled = false;
    if (initialNum !== '') {
        if (emptyArr.length === 2) {
            // if (emptyArr[1] === e.target.value) {
            //     console.log('hi')
            // }
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
    previousExpression.textContent = `${tempNum} ${chosenOperator} ${initialNum}`;
}

function getOperator(e) {
    // if (initialNum == 0 && chosenOperator === 'divide') {
    //     alert('cant do that');
    //     initialNum = initialNum.substring(1)
    //     emptyArr.shift(initialNum);
    //     emptyArr.pop();
    // } else { 
    otherNum = initialNum;
    tempNum = emptyArr[0].toString();
    // tempNum = initialNum;
    if (emptyArr.length !== 1 && initialNum !== '') {
        emptyArr.push(parseFloat(initialNum));
        console.log(emptyArr);
        initialNum = operate(emptyArr[0], emptyArr[1], emptyArr[2])
        emptyArr = [];
        emptyArr.push(initialNum);
        console.log(emptyArr)
        displayNumber.textContent = emptyArr[0];
    }

    showPrevious(tempNum, otherNum);
    checkDecimal();
}

function showPrevious(num1, num2) {
    if (num1.includes('.') || num2.includes('.')) {
        num1 = emptyArr[0].toString();
        num1 = num1.substring(0, num1.indexOf('.') + 5);
        num1 = Math.round(num1 * 1000) / 1000;
        // num2 = emptyArr[0].toString();
        num2 = num2.substring(0, num2.indexOf('.') + 5);
        num2 = Math.round(num2 * 1000) / 1000;
        previousExpression.textContent = `${num1} ${chosenOperator} ${num2} =`;
    } else {
        previousExpression.textContent = `${tempNum} ${chosenOperator} ${otherNum} =`;
    }
}

function btnOperator(e) {
    if (emptyArr[1] !== e.target.value && emptyArr.length === 2) {
        getOperator();
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
            return parseFloat(initialNum);
    }
}







