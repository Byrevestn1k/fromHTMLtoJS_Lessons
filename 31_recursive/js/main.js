/*
!5 = 5 * 4!
!4 = 4 * 3!
!3 = 3 * 2!
!2 = 2 * 1!
!1 = 1
!0 = 1
*/


function factor(number)
{
    if(number == 0 || number == 1) return 1
    return number * factor(number - 1)
}

// console.log(factor(5))

// Напишіть функцію, яка виводить усі числа із заданого
// користувачем діапазону у прямому порядку. І ще одну
// функцію – для виведення у зворотному порядку.

// 1,10
// 1,2,3,4,5,6,7,8,9,10

/*
print(1,10)
print(2,10)
print(3,10)
****
print(11,10)
*/

// function printAB(a,b){
//     if(a <= b){
//         console.log(a)
//         printAB(a+1,b)
//     }   
// }
// function printBA(a,b){
//     if(a <= b){
//         console.log(b)
//         printBA(a,b-1)
//     }   
// }
// printBA(1,10)

// 3. Напишіть функцію, яка виводить передане їй число паліндромом (число-перевертень).
// Наприклад: число 1234 вивести як 4321
 // 12345
 // 54321
//  let root = document.querySelector('.root')
// function reverseNumber(number,root){
//     if(number < 10){
//         root.textContent += number
//         return
//     }
//     root.textContent += number%10
//     reverseNumber(parseInt(number/10),root)
// }

// reverseNumber(123456,root)

// 12345
// (5 * 10 + 4) --> (54 * 10 + 3) --> (543 * 10) + 2 --> 5432 * 10 + 1 --> 54321




// function sumNumber(number){
//     if(number < 10){
//         return number
//     }
//     return number%10 + sumNumber(parseInt(number/10))
// }
// console.log(sumNumber(12345))

function printSymbol(number)
{
    if(number == 0){return}
    console.log('(')
    printSymbol(number-1)
    console.log(')')
}

printSymbol(4)