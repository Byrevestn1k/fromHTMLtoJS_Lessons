// while, do while, for

// let i = 0;
// document.write("<ol>")
// while(i < 10){
//     i++;
//     document.write(`<li> Hello </li>`);
// }
// document.write("</ol>")

// task 1 . Вивести в рядок через пропуск, числа від 0 ... 10
// {
//     let i = 0;
//     document.write("<p>")
//     while (i < 10) {
//         document.write(`${i} `);
//         i++;
//     }
//     document.write("</p>")
// }

// task 2 . Вивести в рядок через пропуск, числа  0 2 4 6 8 10 12 14 16 18 20
// {
//     let i = 0;
//     document.write("<p>")
//     while (i <= 20) {
//         //way 1
//         //if(i % 2 == 0)
//         //  document.write(`${i} `);
//         //i++;
//         //way 2
//         document.write(`${i} `);
//         i += 2;
//     }
//     document.write("</p>")
// }

// task 3 . Вивести в рядок через пропуск, числа  10 9 8 7 6 5 4 3 2 1 0
// {
//     let i = 10;
//     document.write("<p>")
//     while (i >= 0) {
//         //way 1
//         //if(i % 2 == 0)
//         //  document.write(`${i} `);
//         //i++;
//         //way 2
//         document.write(`${i} `);
//         i--;
//     }
//     document.write("</p>")
// }

// // task 3 . Вивести в рядок через пропуск, числа  10 9 8 7 6 5 4 3 2 1 0
// {
//     let i = 10;
//     // document.write("<p>")
//     while (i >= 0) {
//         //way 1
//         //if(i % 2 == 0)
//         //  document.write(`${i} `);
//         //i++;
//         //way 2
//         alert(i);
//         i--;
//     }
//     // document.write("</p>")
//     document.body.style.backgroundImage = "url(https://media.tenor.com/9blGWJaDlI4AAAAC/%D0%BF%D1%80%D0%B8%D0%B2%D0%B5%D1%82-%D0%B7%D0%B0%D0%B9%D1%87%D0%B8%D0%BA.gif)";
// }

// {
//     let answer;
//     do {
//         answer = +prompt(" 2 + 2 = ?");
//     } while (answer != 4);
// }

// 1. Виведіть # стільки разів, скільки вказав користувач.
document.write("1. Виведіть # стільки разів, скільки вказав користувач.<br>")
{
    let number = 10;//+prompt("Enter number");
    let i = 0;
    while (i < number) {
        document.write("# ");
        i++;
    }
    document.write("<br>")
    while (number > 0) {
        document.write("# ");
        number--;
    }
    document.write("<br><br><br>")
}
// 2. Користувач ввів число, а на екран було виведено всі числа: від введеного до 0.
document.write("2. Користувач ввів число, а на екран було виведено всі числа: від введеного до 0.<br>")
{
    let number = 5;//+prompt("Enter number");
    if (number > 0) {
        while (number > 0) {
            document.write(`${number} `);
            number--;
        }
    }
    else {
        while (number < 0) {
            document.write(`${number} `);
            number++;
        }
    }

    document.write("<br><br><br>")
}
// 3. Запросіть число та ступінь. Зведіть число у вказаний ступінь та виведіть результат.
document.write("3. Запросіть число та ступінь. Зведіть число у вказаний ступінь та виведіть результат.<br>")
{
    let number = 2//+prompt("Enter number"); // 2
    let pow = 5//+prompt("Enter power"); // 3
    // 2^3 => 2 * 2 * 2
    // let res = 1;
    // let i = 0;
    // while(i < pow)
    // {
    //     res = res * number;
    //     i++;
    // }
    let res = number;
    let i = 0;
    while (i < pow - 1) {
        //res = res * number;
        res *= number;
        i++;
    }
    document.write(`${number}^${pow} = ${res}`);
    document.write("<br><br><br>")
}
// 4. Запросіть 2 числа і знайдіть всі спільні дільники.
document.write("4. Запросіть 2 числа і знайдіть всі спільні дільники.<br>")
{
    let first = 35//+prompt("Enter number"); // 35
    let second =15//+prompt("Enter number"); // 15
    // 35 && 15 => 
    let lower = first < second ? first : second;
    document.write(`${first} && ${second} <br> `);
    let i = 1;
    while (i <= lower) {
        if (first % i == 0 && second % i == 0) {
            document.write(`${i} `);
        }
        i++;
    }
    document.write("<br><br><br>")
}
// 5. Підрахуйте факторіал числа, введеного користувачем
document.write("5. Підрахуйте факторіал числа, введеного користувачем <br>")
{
    let number = 5;//+prompt("Enter number"); // 5
    // 5! = 1 * 2 * 3 * 4 * 5 => 120
    document.write(`${number}! = `);
    if (number == 0 || number == 1) {
        document.write(`1 <br> `);
    }
    else {
        let res = 1;
        let i = 2;
        while (i <= number) {
            res *= i;
            i++;
        }
        document.write(`${res} <br> `);
    }
    document.write("<br><br><br>")
}

// ■ Завдання, у яких необхідно використати DO WHILE.
document.write(`<h3 style = "text-align:center;">Завдання, у яких необхідно використати DO WHILE.</h3>`)
// 1. Запропонуйте користувачеві розв’язати приклад 2 + 2 * 2, доки він не надасть правильну відповідь.
document.write("1. Запропонуйте користувачеві розв’язати приклад 2 + 2 * 2, доки він не надасть правильну відповідь.<br>")
{
    let answer;
    let counter = 0;
    do{
        answer = +prompt("2 + 2 * 2 = ? ");
        counter++;
    }while(answer != 6)
    document.write(`${counter}`);
    document.write("<br><br><br>")
}
// 2. Діліть число 1000 на 2, доки не отримаєте число менше, ніж 50. Виведіть отримане число і скільки зробили поділів.
// 1000 / 2
// 500 > 50
// 500 / 2
// 250 > 50
// 250 / 2
// 125 > 50
document.write("2. Діліть число 1000 на 2, доки не отримаєте число менше, ніж 50. Виведіть отримане число і скільки зробили поділів<br>")
{
    let number = 1000;
    let counter = 0;
    do{
        number /= 2;
        counter++;
    }while(number > 50)
    document.write(`number :: ${number} ---> ${counter}`);
    document.write("<br><br><br>")
}

// Завдання 1. Вивести на екран усі числа від нуля до введеного користувачем числа.
// Завдання 2. Користувач вводить дві межі діапазону, вивести на екран усі числа з цього діапазону. Передбачити, щоб користувач міг вводити межі діапазону в довільному порядку.
//   ■ вивести всі парні числа з діапазону.
//   ■ вивести всі непарні числа з діапазону.
//   ■ вивести всі числа, кратні семи.
// Завдання 3. Користувач вводить дві межі діапазону. Порахувати суму всіх чисел діапазону.
// Завдання 4. Користувач з клавіатури вводить числа. Порахувати їхню суму і вивести на екран, щойно користувач
// введе нуль.

// help task 2
// let first = 10;
// let second = 1;
// if(first > second)
// {
//     let tmp = first; // tmp{10}
//     first = second; // first(1), second(1)
//     second = tmp; // second{10}
// }
// while(first <= second)
// {
    // if(first % 2 == 0){

    // }
    // first++;
// }
// while(first <= second)
// {
    // if(first % 2 != 0){

    // }
    // first++;
// }
// while(first <= second)
// {
    // if(first % 7 == 0){

    // }
    // first++;
// }

// sum = 0;
// sum = 1 + 2 + 3 + 4 + 5