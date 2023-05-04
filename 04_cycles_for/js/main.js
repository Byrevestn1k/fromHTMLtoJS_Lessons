
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
    if(flag){
        console.log("Is Prime");
    }
    else{
        console.log("Is Simple");
    }
    console.log(it);
}