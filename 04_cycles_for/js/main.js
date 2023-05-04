
// let i = 0; - лічильник
// i < 10; - доки true -> цикл працює
// i++ - крок, як змінюється лічильник після кожної ітерації
// break; - вихід з циклу
// continue; - зупинити поточну ітерацію, перейти до наступної
// let i = 1;
// for (; ;) { // тіло цикла
//     if (i == 20)
//         break;
//     i++;
//     document.write(i + " ");

// }
// alert(i);

// for (let i = 0; i < 10; i++) {
//     let number = +prompt("Enter");
//     if(number % 2 == 0)
//         continue;

//     document.write(`${number} `);
// }
//Запросіть число і перевірте, чи просте воно. Просте число ділиться без залишку тільки на себе і на 1.
{
    let number = 25;//+prompt("Enter number");
    let flag = false;
    let it = 0;
    for (let i = 2; i <= number / 2; i++) {
        it++;
        if (number % i == 0) {
            flag = true;
            break;
        }
    }
    if (flag) {
        console.log("Is Prime");
    }
    else {
        console.log("Is Simple");
    }
    console.log(it);
}
//Виведіть таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10

document.write("<table>")
for (let q = 0; q < 10; q+=5) {
    document.write("<tr>")
    for (let j = 1; j < 6; j++) {
        document.write("<td>")
        for (let i = 1; i <= 10; i++) {
            document.write(`${j + q} x ${i} = ${(j + q) * i}<br>`);
        }
        document.write("</td>")
    }
    document.write("</tr>")
}
document.write("</table>")

// Виведіть кожен 4-ий елемент із зазначеного користувачем діапазону. Користувач вказує мінімальне та максимальне значення діапазону

let min = +prompt("Enter number");
let max = +prompt("Enter number");

for(let i = min+3; i <= max; i+=4){
    document.write(i + " ");
}
