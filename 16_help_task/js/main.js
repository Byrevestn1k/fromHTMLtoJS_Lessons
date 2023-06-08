let board = document.querySelector('.board')
let res = document.querySelector('.calculate p')


let number1 = 0, number2 = 0, result;
let symbol;
let flag = true;
board.addEventListener('click', (e) => {
    if (e.target.tagName == 'BUTTON' && !e.target.classList.contains('res')) {
        symbol = parseInt(e.target.textContent)
        if (!symbol) symbol = e.target.textContent;
        calculate(symbol);
        if (flag) {
            res.textContent = number1;
        }
        else if (!flag && number2 == 0) {
            res.textContent = number1 + " " + result;
        }
        else {
            res.textContent = number1 + " " + result + " " + number2;
        }
        return
    }
    symbol = result;
    switch (symbol) {
        case '+':
            result = number1 + number2; break;
        case '-':
            result = number1 - number2; break;
        case '*':
            result = number1 * number2; break;
        case '/':
            result = number1 / number2; break;
    }
    res.textContent = number1 + " " + symbol + " " + number2 + " = " + result;

})

function calculate(symbol) {
    if (symbol == '*' || symbol == '+' || symbol == '-' || symbol == '/') {
        flag = false;
        result = symbol;
        return;
    }

    if (flag) {
        number1 *= 10;
        number1 += symbol;
    }
    else {
        number2 *= 10;
        number2 += symbol;
    }
}