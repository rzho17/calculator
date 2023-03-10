const numberButtons = document.querySelectorAll('.num');
const allBtn = document.querySelectorAll('#btn');
const clear = document.querySelector('.clear');
const delBtn = document.querySelector('.delete');
const displayNumber = document.querySelector('.displayNumber');
const previousExpression = document.querySelector('.previousExpression');
const operator = document.querySelectorAll('.operator');
const addBtn = document.querySelector('.add');
const subtractBtn = document.querySelector('.subtract');
const equalBtn = document.querySelector('.equal');


let initialNum = "";
let tempNum = 0;
let chosenOperator = "";
let emptyArr = [];
let finalNum = 0;

subtractBtn.addEventListener('click', () => {
    if (emptyArr.length < 1) {
        emptyArr.push(parseInt(initialNum));
    }
    initialNum = "";
    emptyArr.push('subtract');
})

for (let num of numberButtons) {
    num.addEventListener('click', () => {
        initialNum += num.value;
        displayNumber.textContent = initialNum;
        previousExpression.textContent = initialNum;

        // if (emptyArr.length > 1) {
        //     finalNum += num.value;
        //     emptyArr.push(parseInt(finalNum));
        //     finalNum = 0;
        //     initialNum = operate(emptyArr[0], emptyArr[1], emptyArr[2])
        //     emptyArr = [];
        //     emptyArr.push(initialNum);
        //     console.log(emptyArr)
        //     displayNumber.textContent = emptyArr[0];
        // }
    })
}

addBtn.addEventListener('click', function (e) {

    if (emptyArr.length === 2) {
        emptyArr.push(parseInt(initialNum));
        console.log(emptyArr);
        initialNum = operate(emptyArr[0], emptyArr[1], emptyArr[2])
        emptyArr = [];
        emptyArr.push(initialNum);
        console.log(emptyArr)
        displayNumber.textContent = emptyArr[0];
    }
    if (emptyArr.length < 1) {
        emptyArr.push(parseInt(initialNum));
    }
    chosenOperator = 'add';
    initialNum = "";
    emptyArr.push(chosenOperator);

    // if (emptyArr.length < 3) {
    //     initialNum += e.target.value;
    //     initialNum = initialNum.slice(3)
    //     emptyArr.push(initialNum)
    // }

})




equalBtn.addEventListener('click', function () {
    emptyArr.push(parseInt(initialNum));
    console.log(emptyArr);
    initialNum = operate(emptyArr[0], emptyArr[1], emptyArr[2])
    emptyArr = [];
    emptyArr.push(initialNum);
    console.log(emptyArr)
    displayNumber.textContent = emptyArr[0];
})


delBtn.addEventListener('click', () => {
    if (initialNum.length < 0) {

    } else {
        initialNum = initialNum.toString();
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
            return add(num1ToNum, num2ToNum);
        default:
            return console.log("do nothing")
    }
}







