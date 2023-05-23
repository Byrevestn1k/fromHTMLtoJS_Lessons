

//let colors = ["red","blue","pink","yellow","purple","brown","green"];
//console.log(colors);

// let colors = [];
// for(let i = 0; i < 10; )
// {
        let mark = +prompt();
        if(mark > 0 && mark <= 12){
            //     colors[i] = mark;
            i++
        }

// }
// for(let i = 0; i < 10; i++)
// {
//     document.write(colors[i] + "<br>");
// }
// console.log(colors);

// let number = new Array();
// console.log(number);
// number = new Array(10);
// console.log(number);
// number = new Array(10,3,true,"text");
// console.log(number);

// document.write(`<h1>${colors[0]}</h1>`)
// document.write(`<h1>${colors[1]}</h1>`)
// document.write(`<h1>${colors[2]}</h1>`)
// for(let i = 0; i < colors.length; i++)
// {
//     document.write(`<h1 style = "color: ${colors[colors.length - 1 - i]};">${colors[i]}</h1>`);
// }
// document.write(`<h1 style = "color: red;">red</h1>`);
// document.write(`<h1 style = "color: blue;">blue</h1>`);


// Задано масив з числовими значеннями 2,-5,-9,2,-4,5,34,-11,2,3,4,5,-6,9;
// В масиві визначити суму від’ємних елементів
// Знайти добуток елементів, розташованих між найбільшим та найменшим елементами.

let number = [2, -5, -9, 34, 2, -4, 5, -11, 2, 3, 4, 5, -6, 9];
let sum = 0;
for (let i = 0; i < number.length; i++) {
    if (number[i] < 0) {
        sum += number[i];
    }
}
/* for (let i = 0; i < number.length; i++) {
    if(number[0] < 0){
        sum+= number[i];
     }
}
for (let i = 1; i < number.length; i++) {
     if(number[1] < 0){
        sum{0}+= number[i]{-5}; sum = -5
     }
}
*/
let min = number[0];
let max = number[0];
let idMin = 0, idMax = 0;
for (let i = 0; i < number.length; i++) {
    if (min > number[i]) {
        min = number[i];
        idMin = i;
    }
    if (max < number[i]) {
        max = number[i];
        idMax = i;
    }
}
/*
-- 1 let min = number[0];{2}
for(let i = 0; i < number.length; i++)
{
    if(min{2} > number[i]{2}){
        min = number[i];
    }
}
for(let i = 1; i < number.length; i++)
{
    if(min{2} > number[i]{-5}){
        min = number[i]{-5};
        idMin = i;
    }
}
for(let i = 2; i < number.length; i++)
{
    if(min{-5} > number[i]{-9}){
        min = number[i]{-9};

    }
}
*/
// let start = idMin >= idMax ? idMax : idMin;
// let end = idMin >= idMax ? idMin : idMax;
// let mult = 1;
// for(let i = start+1; i < end; i++)
// {
//     mult*= number[i]; // mult = mult * number[i]
//     console.log("Test number" + number[i]);
// }
// console.log(number);
// console.log(min, idMin);
// console.log(max, idMax);
// console.log(mult);

let colors = ["red","blue","pink","yellow","purple","brown","green"];

console.log("Print" , colors)

colors.push("gold","lime"); // додає нові елементи в кінець масиву
console.log("Push " , colors)

colors.pop();
console.log("Pop " , colors) // видаляє елемент в кінці

colors.unshift("lime", "violet"); 
console.log("Unshift " , colors) // додає на початок

colors.shift(); 
console.log("Shift " , colors) // видаляє перший елемент

colors.splice(1,2,"black","white","Cyan"); // (start, deleteCount, ...items)
console.log("Splice" , colors) // 

let newMas = colors.slice(0,5);
console.log("Slice" , newMas) // 

newMas = colors.concat(["color1","color2"],[true,false],newMas);
console.log("Concat" , newMas) // 

document.write(newMas.join("<br> - "));
console.log(newMas.join(" - "))

let line = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.".split(" ");
console.log(line);
//let digit = "1,2,3,5,6,4,8,5,4,7,8 5,9,6".split(",");
let digit = [1,22,36,1,4,58,2,78,1,2,4,11];
console.log(digit);

colors.sort();
console.log(colors);

digit.reverse();
console.log(digit);

