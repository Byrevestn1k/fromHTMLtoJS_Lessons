

// let first_name = "Ivan"
// let last_name = "Ivanov"
// let date = "10.11.2001"
// let email = "blabla.gmail.com"


// let first_name_1 = "Ivan"
// let last_name_1 = "Ivanov"
// let date_1 = "10.11.2001"
// let email_1 = "blabla.gmail.com"

// let user = new Object(); // empty
// key : value
// let key = "rating" //prompt("Enter name key")
// let value = 11 //prompt("Enter value key")
// let user = {
//     name:"Ivan",
//     "last name":"Bondar",
//     date:"14.09.2005",
//     email:"itste@academy.org",
//     isAdmin:false,
//     age:15,
//     city:undefined,
//     if:null,
// }
// user.checkAge = ()=>{

//     true_year = new Date().getFullYear() -  user.date.split(".")[2]

//     if(user.date.split('.')[1] > new Date().getMonth() + 1)
//     {
//         true_year--;
//         return (user.age == true_year) ? true : false
//     }
//     if(user.date.split('.')[0] > new Date().getDate()){
//         true_year--;
//         return (user.age == true_year) ? true : false
//     }
//     return (user.age == true_year) ? true : false
// }
// console.log(user.checkAge());

// console.log(user)
// // console.log(user.name)
// // console.log(user["last name"])
// // console.log(user.date)
// // console.log(user.email)
// // console.log(user.isAdmin)
// // console.log(user.age)
// // console.log(user.city)
// // console.log(user.if)
// // console.log(user.key)


// user.average = 10.2
// console.log(user)

// user.average = 11
// console.log(user)

// console.log(user.city == undefined) //  error
// console.log(user.name == undefined) // 
// console.log(user.average == undefined)

// console.log(user.city in user)
// console.log(name in user)
// console.log(average in user)

// for (const key in user) {
//     console.log(key, " : ", user[key])
// }

// let a = 5;
// let b  = a;
// a = 22;
// console.log("a :: ",a); // 22 
// console.log("b :: ",b); // 5
// let key = "rating" //prompt("Enter name key")
// let value = 11 //prompt("Enter value key")
// let user = {
//     name:"Ivan",
//     "last name":"Bondar",
//     date:"10.02.2005",
//     email:"itste@academy.org",
//     isAdmin:false,
//     age:18,
//     city:undefined,
//     if:null,
//     [key + " " + 1]:value
// }
// let user2 = {};
// for (const key in user) {
//    user2[key] = user[key]
// }

// user2.name = "Dima";
// console.log("user 1",user)
// console.log("user 2",user2)


// let createUser = (name,lastname,age) => ({name,lastname,age})

// let user_1 = createUser("Ivan","Poluvko",19)
// console.log(user_1)
// let user_2 = createUser("Petro","Savko",22)
// console.log(user_2)

