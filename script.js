const calcScreen = document.querySelector('.calc-screen');
const resultScreen = document.querySelector('.result-screen');
const btns = document.querySelectorAll('.buttons .num, .operator');
const clearBtn = document.querySelector('.clear');
const equalBtn = document.querySelector('.equal');

btns.forEach(btn => btn.addEventListener('click', displayValue));
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

    }else {
        console.log('Unrecognized operator');
    }
}

function displayValue() {
    calcScreen.textContent += this.textContent;
}

function clearCalc() {
    calcScreen.textContent = '';
}

function getResult(){
    let entries = calcScreen.textContent.split(' ');
    resultScreen.textContent = operate(+entries[0], +entries[2], entries[1]);
    clearCalc();
}