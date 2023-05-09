// Гра «Вгадай число». Запропонуйте користувачеві загадати
// число від 0 до 100 і відгадати його наступним способом: в
// кожній ітерації циклу поділяєте діапазон чисел навпіл,
// записуєте результат в N і запитуєте у користувача «Ваше
// число > N, < N або == N?». Залежно від відповіді користувача, зменшуєте діапазон. Початковий діапазон від 0 до
// 100, поділяєте навпіл і отримуєте 50. Якщо користувач
// вказав, що його число > 50, змінюєте діапазон числа від 51
// до 100. І так доти, доки користувач не вибере == N.

// alert("Guess the number (0 - 100)");
// let counter = 0;
// let end = 100;
// let number = end/2;
// let step = number;
// while(true)
// {
//     let answer = prompt(`Your number \n> ${number}; \n< ${number}; \n= ${number}`);
//     if(answer == "="){
//         alert(`Your number ${number}`);
//         break;
//     }
//     if(counter > 5){
//         alert("Error!!!! You missed your number");
//         break;
//     }
//     step = parseInt(step / 2);
//     if(answer == "<"){
//         number -= step;
//         if(step == 0){
//             number--;
//             counter++;
//         }
//     }
//     else{
//         number+=step;
//         if(step == 0){
//             number++;
//             counter++;
//         }
//     }
// }

//Запросіть у користувача число і на скільки цифр його змістити. Змістіть цифри числа та виведіть результат (якщо число 123456 змістити на 2 цифри, то вийде 345612).
let step = 0;
let number = parseInt(prompt("Enter number","123456"));
let divide = 10;
let tmp = number;
while(tmp > 0){
    step++;
    tmp = parseInt(tmp / 10);
}
// 1234546
// 123456 / 10 => 12345; step = 1
// 12345 / 10 => 1234; step = 2
// 1234 / 10 => 123; step = 3
// 123 / 10 => 12; step = 4
// 12 / 10 => 1; step = 5
// 1 / 10 => 0; step = 6
divide = divide**(step-1);
// console.log(step);
// console.log(divide);
// 123456 / 100000 => 1
// 123456 % 100000 => 23456
// 23456 * 10 + 1
let offset = +prompt("Enter offset digit");
console.log(number)
for(let i = 0; i < offset % step; i++)
{
    let n = parseInt(number / divide);
    number %= divide;
    number = number * 10 + n;
}
console.log(number)