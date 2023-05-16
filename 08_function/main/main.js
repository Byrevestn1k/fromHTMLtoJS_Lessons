// let a = 5;


// let divide = function(one, two)
// {
//     if(two == 0){
//         console.error("Error");
//         return;
//     }
//     let res = one / two;
//     return res;
// }
// let number = divide(10,3);
// console.log(divide(45,5));


// function divide(one,two)
// {
//     if(two == 0){
//         console.error("Error");
//         return;
//     }
//     let res = one / two;
//     return res;
// }

//console.log("number = " + number);

// let sum = function(one,two){
//     return one + two;
// }
// let sum = (one,two) => {
//     return one + two;
// }
// let sum = (one,two) => one + two;
// let sub = function(one,two){
//     return one - two;
// }
// let mult = function(one,two){
//     return one * two;
// }
// let divide = function(one,two){

//     // if(two == 0){
//     //     return undefined;
//     // }
//     // return one / two;

//     return two == 0 ? undefined : one / two;
// }

// let calculate = function(one, two, op){
//     switch(op){
//         case '+': return sum(one,two);
//         case '-': return sub(one,two);
//         case '*': return mult(one,two);
//         case '/': return divide(one,two);
//         default:
//             console.error("Not found operation");
//     }
// }
// let a = +prompt("enter first number")
// let b = +prompt("enter second number")
// let op = prompt("enter operator")
// document.write(` Result function calculate ${a} ${op} ${b} :: ${calculate(a,b,op)} <br>`);
// document.write(` Result function calculate :: ${calculate(a,b,'+')} <br>`);
// document.write(` Result function calculate :: ${calculate(a,b,'-')} <br>`);
// document.write(` Result function calculate :: ${calculate(a,b,'*')} <br>`);
// document.write(` Result function calculate :: ${calculate(a,b,'/')} <br>`);

// Напишіть функцію, яка приймає число і виводить таблицю множення для цього числа. Викличте функцію для всіх
// чисел від 2 до 9.

document.write("<h2> Task 5 </h2>");
let multiTable = (number) => {
    for (let i = 1; i <= 10; i++) {
        document.write(`${i} x ${number} = ${i * number}; <br>`)
    }
}

document.write("<table>")
for (let i = 2; i < 10; i++) {
    if (i == 2 || i == 6) {
        document.write("<tr>")
    }
    document.write(`<td>`)
    multiTable(i);
    document.write(`</td>`)
    if (i == 5 || i == 9) {
        document.write("</tr>")
    }
}
document.write("</table>")
// Напишіть функцію, яка реалізує роботу оператора %. Функція приймає 2 параметри та повертає залишок від ділення
// першого параметра на другий. У функції використовуйте
// тільки + - * /, а оператор % не використовувати.

// 17 / 3;
// 17 / 3 = 5
// 17 - (5 * 3) => 2

// let remainder = (one,two) =>{
//     let int = parseInt(one / two);
//     let res = one - int * two;
//     return res;
// }

let remainder = (one, two) => one - (parseInt(one / two) * two);
console.log(remainder(23,4));

