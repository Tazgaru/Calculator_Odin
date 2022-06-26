const calcScreen = document.querySelector('.calc-screen');
const resultScreen = document.querySelector('.result-screen');
const numBtns = document.querySelectorAll('.buttons .num');
const operatorBtns = document.querySelectorAll('.operator');
const clearBtn = document.querySelector('.clear');
const equalBtn = document.querySelector('.equal');

numBtns.forEach(btn => btn.addEventListener('click', displayNum));
operatorBtns.forEach(btn => btn.addEventListener('click', displayOperator));
clearBtn.addEventListener('click', clearCalc);
equalBtn.addEventListener('click', getResult);

function operate(num1, num2, operator){

    if (operator == '+'){
        return num1 + num2;

    }else if (operator =='-') {
        return num1 - num2;

    }else if (operator =='*') {
        return num1 * num2;

    }else if (operator == '/') {
        return num1 / num2;

    }else {const operatorBtns = document.querySelectorAll('.buttons .num, .operator');
        console.log('Unrecognized operator');
    }
}

function displayNum() {
    calcScreen.textContent += this.textContent;
}

function displayOperator() {
    let currentValue = calcScreen.textContent;
    // -3 because of 2 added spaces in textContent of operators
    let lastEntry = currentValue.slice(currentValue.length - 3);

    if (lastEntry == ' + ' || lastEntry == ' - ' || lastEntry == ' * ' || lastEntry == ' / ' && currentValue != ''){
        let currentContent = calcScreen.textContent;
        calcScreen.textContent = currentContent.substring(0, currentContent.length - 3);
        calcScreen.textContent += this.textContent;
    }else {
        calcScreen.textContent += this.textContent;
    }
}

function clearCalc() {
    calcScreen.textContent = '';
}

function getResult(){
    let entries = calcScreen.textContent.split(' ');
    resultScreen.textContent = operate(+entries[0], +entries[2], entries[1]);
    clearCalc();
}