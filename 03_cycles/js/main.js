// while, do while, for

// let i = 0;
// document.write("<ol>")
// while(i < 10){
//     i++;
//     document.write(`<li> Hello </li>`);
// }
// document.write("</ol>")

// task 1 . Вивести в рядок через пропуск, числа від 0 ... 10
{
    let i = 0;
    document.write("<p>")
    while (i < 10) {
        document.write(`${i} `);
        i++;
    }
    document.write("</p>")
}

// task 2 . Вивести в рядок через пропуск, числа  0 2 4 6 8 10 12 14 16 18 20
{
    let i = 0;
    document.write("<p>")
    while (i <= 20) {
        //way 1
        //if(i % 2 == 0)
        //  document.write(`${i} `);
        //i++;
        //way 2
        document.write(`${i} `);
        i += 2;
    }
    document.write("</p>")
}

// task 3 . Вивести в рядок через пропуск, числа  10 9 8 7 6 5 4 3 2 1 0
{
    let i = 10;
    document.write("<p>")
    while (i >= 0) {
        //way 1
        //if(i % 2 == 0)
        //  document.write(`${i} `);
        //i++;
        //way 2
        document.write(`${i} `);
        i--;
    }
    document.write("</p>")
}

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

{
    let answer;
    do {
        answer = +prompt(" 2 + 2 = ?");
    } while (answer != 4);

}