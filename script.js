const calcScreen = document.querySelector('.calc-screen');
const btns = document.querySelectorAll('.buttons .num, .operator');

btns.forEach(btn => btn.addEventListener('click', displayValue));

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