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

function printAB(a,b){
    if(a <= b){
        console.log(a)
        printAB(a+1,b)
    }   
}
function printBA(a,b){
    if(a <= b){
        console.log(b)
        printBA(a,b-1)
    }   
}
printBA(1,10)