let board = document.querySelector('.board')
let res = document.querySelector('.calculate p')

{
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
}
{

let name = document.querySelector('.task4 input')
let text = document.querySelector('.task4 textarea')
let btn = document.querySelector('.task4 button')
let box = document.querySelector('.task4 .comments')

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    createComment();
});

function createComment(){
    let div = document.createElement('div')
    let h3 = document.createElement('h3')
    h3.textContent = name.value;
    div.insertAdjacentElement('beforeend',h3)
    let p = document.createElement('p')
    p.textContent = new Date().toLocaleDateString();
    div.insertAdjacentElement('beforeend',p)
    let ptext = document.createElement('p')
    ptext.textContent = text.value
    div.insertAdjacentElement('beforeend',ptext)
    box.insertAdjacentElement('beforeend',div);
}


}