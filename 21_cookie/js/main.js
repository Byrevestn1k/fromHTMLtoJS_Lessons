

// let date = new Date()
// date.setTime((new Date().getTime()) - 60 *1000)
// console.log(date);
// document.cookie = `userLogin=dev; expires=${date};path=/`
// document.cookie = `password=devuser; expires=${date};path=/`

// window.addEventListener('load',()=>{
//     console.log('cookie',document.cookie)
// })

let res = document.cookie
console.log(res)

// console.log(res.split('; '))

res = res.split('; ')
console.log("Array cookie",res)
let cookieObj = {}

for (let i = 0; i < res.length; i++) {
    if(res[i] != 'undefined'){
        let str = res[i].split('=')
        console.log(str)
        cookieObj[str[0]] = str[1]
        // console.log(i,cookieObj)
    }
}
console.log(cookieObj.userLogin)
console.log(cookieObj.password)
let obj ={
    userLogin:'dev',
    password: 'devuser',
   
}

obj.age = 22


// document.querySelector('button').onclick = function(){

// //}
// function show(){
//     alert('Hello')
// }
