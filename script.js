const numberButtons = document.querySelectorAll('.num');
const clear = document.querySelector('.clear');
const delBtn = document.querySelector('.delete');

let initialNum = "";

for (let num of numberButtons) {
    num.addEventListener('click', () => {
        initialNum += num.value;
        console.log(initialNum);
    })
}

delBtn.addEventListener('click', () => {
    if (initialNum.length < 0) {

    } else {
        initialNum = initialNum.substring(0, initialNum.length - 1)
        console.log(initialNum)
    }
})

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate(x, y, operator) {
    return operator(x, y);
}







