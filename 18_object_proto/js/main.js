

// function Car(name,year,distance){
//     this.name = name;
//     this.year = year;
//     this.distance = distance
// }


// let ford = new Car("Ford",2010,12452);
// let bmw = new Car("BMW",2000,134545)
// Car.prototype.getYear = function(){
//     return new Date().getFullYear() - this.year;
// }
// Car.prototype.color = "black"
// ford.color = "red"
// console.log(ford);
// console.log(bmw);

// // console.log("---- FORD ----")
// // for (const key in ford) {
// //     console.log(key , " :: " , ford[key])
// // }
// // console.log("---- BMW ----")
// // for (const key in bmw) {
// //     if (Object.hasOwnProperty.call(bmw, key)) {
// //         console.log(key , " :: " , bmw[key])
// //     }
// // }
// console.log(Object.keys(ford));
// console.log(Object.keys(bmw));


// console.log("---- FORD ----");
// Object.keys(ford).forEach((key)=>{
//     console.log(key , " :: " , ford[key]);
// })
// console.log("---- BMW ----");
// Object.keys(bmw).forEach((key)=>{
//     console.log(key , " :: " , bmw[key]);
// })

// let ford = {
//     name:"Ford",
//     year:2001,
//     distance:12452
// }
// let ford = Object.create(
//     {
//         getAge: function(){
//             Object.defineProperty(this,'age',{
//                 value:new Date().getFullYear() - this.year})
//         },
//         colorCar:{
//             value:"black"
//         }
//     },
//     {
//         name: {
//             value: "Ford",// значення властивості
//             enumerable:true, // перерахуно
//             writable:true, // чи можна редагувати значення
//             configurable:true // видалення властивостей           
//         },
//         year: {
//             value: 2001,
//             enumerable:true,
//             writable:false
//         },
//         distance:{
//             value: 1254,
//             enumerable:true,
//             writable:true
//         },
//         color:{
//             get:function(){
//                 console.log("get color")
//                 return "red"
//             },
//             set:function(){
//                 console.log("set color")
//             }
//         }
//     });
// console.log(ford)
// console.log("Example keys.forEach")
// Object.keys(ford).forEach((key)=>{
//     console.log(key, " :: ", ford[key])
// });
// console.log("Example for in")
// for (const key in ford) {
//     console.log(key, " :: ", ford[key])
// }
// console.log("Name ",ford.name)

// console.log(new Date().getTime());
// console.log(new Date(2000,11,10));
// console.log("Year :: " , new Date().getFullYear());
// console.log("Month :: " , new Date().getMonth() + 1);
// console.log("Day :: " , new Date().getDate());
// console.log("Day name :: " , new Date().getDay());
// console.log("Hours :: " , new Date().getHours());
// console.log("Minute :: " , new Date().getMinutes());
// console.log("Second :: " , new Date().getSeconds());
// console.log("Milliseconds :: " , new Date().getMilliseconds());
// let date = new Date();

// console.log(date)

// date.setFullYear(2020)
// date.setDate(5)
// date.setMonth(11)


// console.log(date.toDateString())
// console.log(date.toLocaleDateString())


let startDate = new Date()
console.log(startDate)
let endDate = new Date(2023,05,17);
console.log(endDate)
console.log(endDate - startDate)
let res = parseInt((endDate - startDate) / 1000);
//let newDate = new Date();

let date = new Date().toLocaleDateString();
date = date.split('.')
console.log(date)



