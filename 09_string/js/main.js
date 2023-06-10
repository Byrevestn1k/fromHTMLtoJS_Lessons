



// let email = "bl@abla@gmail.com";

// let index = email.indexOf("@");
// console.log(index);
// index = email.indexOf("com");
// console.log(index);
// index = email.indexOf("ua");
// console.log(index);

// let index = email.indexOf("@");
// if(index == -1){
//     console.log("not found");
// }
// else{
//     while(index != -1){
//         console.log(index);
//         index = email.indexOf("@",index + 1);
//     }
// }

// let index = email.lastIndexOf("@");
// if(index == -1){
//     console.log("not found");
// }
// else{
//     while(index != -1){
//         console.log(index);
//         index = email.lastIndexOf("@",index - 1);
//     }
// }


// let find = (str, char) =>{
//     for(let i = 0; i < str.length; i++){
//         if(str[i] == char) return i;
//     }
//     return -1;
// }
// if(find(email,"@") != -1){
//     console.log("ok")
// }
// else{
//     console.log("no ok")
// }
// str = ['H','y','p','e','r']

// for(let i = 0; i < str.length; i++)
// {
//     document.write(`${str[i]} <br>`);
// }

// let str = "Hyper Text Markup Language";
// str += " text text text"; // str = str + ""
// let newStr = str.substring(10);
// console.log(str);
// console.log(newStr);

// email = "dashakonopelko@gmail.com";
// let start = email.indexOf("@");
// let end = email.indexOf(".",start);
// console.log(email.substring(start,end+1));

// console.log(Math.PI)
// console.log(Math.SQRT1_2)
// let min = 10, max = 20;
// let number1 = Math.random() * (max - min) + min; // random min - max
// // Math.Random(0.07856) * (20 - 10) + 10;
// //(0.97856)  * 10 + 10
// // 4.7856 + 10 => 14.7856
// // Math.floor(14.7856) => 19
// console.log(number1)
// console.log("Random :: " + Math.floor(number1)); // 5.7 => 5
// // console.log("Random :: " + Math.round(number1)); // 5.7 => 6