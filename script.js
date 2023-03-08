const numberButtons = document.querySelectorAll('.num');
const allBtn = document.querySelectorAll('#btn');
const clear = document.querySelector('.clear');
const delBtn = document.querySelector('.delete');
const displayNumber = document.querySelector('.displayNumber');
const previousExpression = document.querySelector('.previousExpression');
const operator = document.querySelectorAll('.operator');
const addBtn = document.querySelector('.add');
const equalBtn = document.querySelector('.equal');


let initialNum = "";
let tempNum = 0;
let chosenOperator = "";
let emptyArr = [];

for (let num of numberButtons) {
    num.addEventListener('click', () => {
        initialNum += num.value;
        displayNumber.textContent = initialNum;
        previousExpression.textContent = initialNum;
    })
}

addBtn.addEventListener('click', function () {
    emptyArr.push(parseInt(initialNum));
    chosenOperator = 'add';
    initialNum = "";
    emptyArr.push(chosenOperator);
})


equalBtn.addEventListener('click', function () {
    emptyArr.push(parseInt(initialNum));
    console.log(emptyArr)
    operate(emptyArr[0], emptyArr[1], emptyArr[2])
})


delBtn.addEventListener('click', () => {
    if (initialNum.length < 0) {

    } else {
        initialNum = initialNum.substring(0, initialNum.length - 1)
        displayNumber.innerText = initialNum;
    }
})

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

    let num1ToNum = parseInt(num1);
    let num2ToNum = parseInt(num2);

    switch (operator) {
        case 'divide':
            return divide(num1ToNum, num2ToNum);
        case 'multiply':
            return multiply(num1ToNum, num2ToNum);
        case 'subtract':
            return subtract(num1ToNum, num2ToNum);
        case 'add':
            return console.log(add(num1ToNum, num2ToNum));
        default:
            return console.log("do nothing")
    }
}







