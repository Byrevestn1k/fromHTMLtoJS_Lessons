// let day = prompt("Enter number day");
// if(day == 1){
//     document.write(`<h2> Monday </h2>`);
// }
// else if(day == 2){
//     document.write(`<h2> Tuesday </h2>`);
// }
// else{
//     document.write(`<h2>Error</h2>`);
// }

// let day = +prompt("Enter number day");
// // console.log(typeof(day))
// // console.log(typeof(1))
// switch (day) { // ===
//     case 1:
//         document.write(`<h2> Monday </h2>`);
//         break;
//     case 2:
//         document.write(`<h2> Tuesday </h2>`);
//         break;
//     case 3:
//         document.write(`<h2> Wednesday </h2>`);
//         break;
//     default:
//         document.write(`<h2> Error </h2>`);
//         break;
// }

// let month = +prompt("Enter number of month");
// let day;
// let url;
// switch (month) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         day = 31;
//         url = 'https://images.prom.ua/2126195028_w640_h640_kartiny-po-nomeram.jpg';
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         day = 30;
//         break;
//     case 2:
//         {
//             let year = +prompt("Enter current year");
//             if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
//                 day = 29;
//             }
//             else {
//                 day = 28;
//             }
//             break;
//         }
//     default:
//         console.error("Error");
// }
// if (day != undefined) {
//     let color = prompt("Enter color");
//     let style = "italic";
//     document.write(`<h2 style = 'color: ${color}; font-style:${style};'> Day of (${month}) = ${day} days </h2>`);
//     //document.write(`<img src = "${url}" />`)
//     document.body.style.backgroundImage = `url(${url})`;
//     //document.body.style.backgroundImage = "url(" + url + "})";
// }


// Запитати у користувача дату і показати кількість днів, що пройшли від початку року;

{
    // 25. 12
    // 1{31} + 2{28 or 29} + 3{31} + 
    let day = +prompt("Enter day");
    let month = +prompt("Enter month");
    let allDay = 0;
    switch (month - 1) {
        case 11: allDay+=30;
        case 10: allDay+=31;
        case 9: allDay+=30;
        case 8: allDay+=31;
        case 7: allDay = allDay + 31;
        case 6: allDay+=30;
        case 5: allDay+=31;
        case 4: allDay+=30;
        case 3: allDay += 31;
        case 2: {
            let year = +prompt("Enter current year");
            if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
               allDay+=29;
            }
            else {
                allDay+=28;
            }
        }
        case 1:
            allDay+=31;
    }
    allDay+= day;
    document.write(`${allDay} days`);
}
// a == true ? document.write("true"): document.write("false") ;
// Запитати у користувача рік народження, відобразити на сторінці картинку знаку зодіаку під яким він народився. (https://rozdil.lviv.ua/Kalendar/Zodiakporokah/). Умова: користувач може ввести від 0 до безкінечності

let number = 254;
let c = number % 10;//4
number = parseInt(number / 10); // 254/10 => 25.4(int) = 25
let b = number % 10; // 5
number = parseInt(number / 10); // 25/10 => 2.5(int) = 2
let a = number;
if(a == b || b == c || c ==a){

}
//25452
let task1 = prompt("qui. \n1. ......; \n2. ......");
let f = confirm();