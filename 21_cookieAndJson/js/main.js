

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
if (document.cookie.indexOf('id') == -1)
    document.cookie = `id=${1}; expires=${date.toUTCString()}`

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

    if(!checkUser(email.value, password.value))
    {
        setCookie(email,password);
        e.preventDefault();
    }
    
})
email.addEventListener('input', () => {
    deleteWrong(wrong[0])
})
password.addEventListener('input', () => {
    deleteWrong(wrong[1])
})

function getId() {
    let index = document.cookie.indexOf('id')
    let id = +(document.cookie[index + 3])
    // console.log(id)
    // console.log(id)
    document.cookie = `id=${id+1}; expires=${date.toUTCString()}`
    return id
}
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
function setCookie(email,password){
    date = new Date()
    date.setHours(new Date().getHours() + 5)
    let id = getId()
    document.cookie = `user${id}=${email.value}; expires=${date.toUTCString()}`
    document.cookie = `password${id}=${password.value}; expires=${date.toUTCString()}`
}

function getCookie(){
    
    let res = document.cookie.split('; ')
    let arr = []
    for(let i = 0; i < res.length; i++){
        let obj = {}
        user = res[i].split('=')
        if(user[0].indexOf('user') != -1){
            obj.user = user[1]
            number = user[user.lenght - 1]
            for(let j = 0; j < res.length; j++){
                tmp =  res[j].split('=')
                if(tmp[0].indexOf('password')!=-1){
                    if(tmp[0][tmp[0].lenght-1] == number){
                        obj.password = tmp[1]
                    }
                }
            }
        }
        else{
            continue;
        }        
        arr.push(obj)
    }
    return arr;
}
function checkUser(email,password){
    let users = getCookie();
    for (let i = 0; i < users.length; i++) {
        if(users[i].user == email && users[i].password == password){
            return true;
        }
    }
    return false;
}
