

// let date = new Date()
// date.setTime((new Date().getTime()) - 60 *1000)
// console.log(date);
// document.cookie = `userLogin=dev; expires=${date};path=/`
// document.cookie = `password=devuser; expires=${date};path=/`

// window.addEventListener('load',()=>{
//     console.log('cookie',document.cookie)
// })

// let res = document.cookie
// console.log(res)

// // console.log(res.split('; '))

// res = res.split('; ')
// console.log("Array cookie",res)
// let cookieObj = {}

// for (let i = 0; i < res.length; i++) {
//     if(res[i] != 'undefined'){
//         let str = res[i].split('=')
//         console.log(str)
//         cookieObj[str[0]] = str[1]
//         // console.log(i,cookieObj)
//     }
// }
// console.log(cookieObj.userLogin)
// console.log(cookieObj.password)
// let obj ={
//     userLogin:'dev',
//     password: 'devuser',

// }

// obj.age = 22


// // document.querySelector('button').onclick = function(){

// // //}
// // function show(){
// //     alert('Hello')
// // }
let date = new Date()
date.setHours(new Date().getHours() + 5)


let form = document.forms[0]
let email = form.email;
let password = form.password;
let link = document.querySelector('form a')
let wrong = document.querySelectorAll('form span')
link.addEventListener('click', (e) => {
    if (!checkEmail(email.value)) {
        wrong[0].classList.add('wrong')
        e.preventDefault();
    }

    if (checkUser(email.value, password.value)) {
        checkUser(email.value, password.value)
    }
    setCookie(email.value, password.value);

})
email.addEventListener('input', () => {
    deleteWrong(wrong[0])
})
password.addEventListener('input', () => {
    deleteWrong(wrong[1])
})


function deleteWrong(wrong) {
    wrong.classList.remove('wrong')
}

function checkEmail(email) {
    if (email.lenght == 0) {
        return false
    }
    if (!/@/.test(email)) {
        return false
    }
    return true;
}
function setCookie(email, password) {

    let obj = {
        email: email,
        password: password
    }
    arr = []
    if (getCookie() != null) {
        arr = getCookie();
    }
    if (checkUser(email, password)) {
        return
    }
    arr.push(obj)
    document.cookie = `current=${arr.length - 1}; expires=${date.toUTCString()}`
    document.cookie = `users=${JSON.stringify(arr)}; expires=${date.toUTCString()}`
}

function getCookie() {
    let res = document.cookie.split('; ')
    for (let i = 0; i < res.length; i++) {
        let s = res[i].split('=')
        if (s[0] == 'users') {
            return JSON.parse(s[1])
        }
    }
    return null
}
function checkUser(email, password) {
    let users = getCookie();
    if (!users) return false;
    for (let i = 0; i < users.length; i++) {
        console.log(users[i])
        if (users[i].email == email && users[i].password == password) {
            document.cookie = `current=${i}; expires=${date.toUTCString()}`

            return true;
        }
    }
    return false;
}
// console.log(getCookie())