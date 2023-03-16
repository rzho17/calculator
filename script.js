const numberButtons = document.querySelectorAll('.num');
const allBtn = document.querySelectorAll('#btn');
const clearBtn = document.querySelector('.clear');
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
let tempOperator = '';




for (let num of numberButtons) {
    num.addEventListener('click', (e) => {
        initialNum += num.value;
        displayNumber.textContent = initialNum;

        switch (chosenOperator) {
            case 'divide':
                chosenOperator = "/";
                break;
            case 'multiply':
                chosenOperator = "*";
                break;
            case 'subtract':
                chosenOperator = "-";
                break;
            case 'add':
                chosenOperator = "+";
                break;
        }
        previousExpression.textContent = `${initialNum} ${chosenOperator}`
    })
}

divideBtn.addEventListener('click', btnOperator);

multiplyBtn.addEventListener('click', btnOperator);

subtractBtn.addEventListener('click', btnOperator);

addBtn.addEventListener('click', btnOperator);

clearBtn.addEventListener('click', clear);


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

            getOperator();
        }
        else if (emptyArr.length < 1) {
            emptyArr.push(parseFloat(initialNum));
        }
        chosenOperator = e.target.value;
        initialNum = "";
        emptyArr.push(chosenOperator);
    }

    checkDecimal();

}

//pushes initial num into array to begin operation and display values, checks for 0 dividers and checks validation for tempNum is previousExpression display
function getOperator(e) {

    if (initialNum == 0 && emptyArr[1] === 'divide') {
        alert("Nice Try :)")
        clear();
    }
    otherNum = initialNum;

    if (emptyArr[0] === undefined) {
        emptyArr[0] = 0;
        tempNum = emptyArr[0].toString();

    } else {
        tempNum = emptyArr[0].toString();
    }


    if (emptyArr.length !== 1 && initialNum !== '') {
        emptyArr.push(parseFloat(initialNum));
        console.log(emptyArr);
        initialNum = operate(emptyArr[0], emptyArr[1], emptyArr[2])
        emptyArr = [];
        emptyArr.push(initialNum);
        console.log(emptyArr)
        displayNumber.textContent = emptyArr[0];
    }

    showPrevious(tempNum, otherNum, chosenOperator);
    checkDecimal();
}

//displays the previous values above current displayed number to allow for easier viewing
function showPrevious(num1, num2, operator) {

    switch (operator) {
        case 'divide':
            chosenOperator = "/";
            break;
        case 'multiply':
            chosenOperator = "*";
            break;
        case 'subtract':
            chosenOperator = "-";
            break;
        case 'add':
            chosenOperator = "+";
            break;
    }

    num1 = emptyArr[0].toString();
    num2 = num2.toString();

    if (num1.includes('.') || num2.includes('.')) {
        if (tempNum === '') {
            previousExpression.textContent = `${initialNum} ${chosenOperator} ${num2} =`;
        } else {
            tempNum = tempNum.toString();
            tempNum = tempNum.substring(0, tempNum.indexOf('.') + 5);
            tempNum = Math.round(parseFloat(tempNum) * 1000) / 1000;

            num2 = num2.substring(0, num2.indexOf('.') + 5);
            num2 = Math.round(num2 * 1000) / 1000;

            previousExpression.textContent = `${tempNum} ${chosenOperator} ${num2} =`;
        }
    } else {
        previousExpression.textContent = `${tempNum} ${chosenOperator} ${otherNum} =`;
    }
}

//checks if the array has the required values to begin the operations
function btnOperator(e) {
    if (emptyArr[1] !== e.target.value && emptyArr.length === 2) {
        getOperator();
    }
    showAlert(e);
}

//converts long numbers with decimals into shorter values that have been rounded
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

function clear() {
    initialNum = "";
    chosenOperator = "";
    emptyArr = [];
    trimmedNum = "";
    tempNum = "";
    otherNum = "";
    tempOperator = '';

    displayNumber.textContent = '0';
    previousExpression.textContent = '';
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







