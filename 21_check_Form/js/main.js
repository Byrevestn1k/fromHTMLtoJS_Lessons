

// let form = document.forms[0]

// form.addEventListener('submit',(e)=>{
//     // if(form.name.value.length == 0){
//     //     form.name.style.borderColor = 'red'
//     //     e.preventDefault()
//     // }
//     if(!checkPassOfDigit(form.password.value)){
//         form.password.style.borderColor = 'red'
//         e.preventDefault()
//     }
// })

// function checkPassOfDigit(pass){
//     for(let i = 0; i < 10; i ++)
//     {
//         if(pass.indexOf(i) != -1)
//             return true
//     }
//     return false
// }

// function checkPassOfLetter(pass){
//     for(let i = 0; i < 10; i ++)
//     {
//         if(pass.indexOf(i) != -1)
//             return true
//     }
//     return false
// }

// form.submit()
// let template = /1/

// let line_1 = '123!-'
// let line_2 = '234'
// let line_3 = 'Lorem ipsum 21 doLor'

// console.log('Example ',template)
// console.log(line_1,' ---> ', template.test(line_1))
// console.log(line_2,' ---> ', template.test(line_2))
// console.log(line_3,' ---> ', template.test(line_3))

// template = /12/
// console.log('Example ',template)
// console.log(line_1,' ---> ', template.test(line_1))
// console.log(line_2,' ---> ', template.test(line_2))
// console.log(line_3,' ---> ', template.test(line_3))

// template = /[12]/
// console.log('Example ',template)
// console.log(line_1,' ---> ', template.test(line_1))
// console.log(line_2,' ---> ', template.test(line_2))
// console.log(line_3,' ---> ', template.test(line_3))

// template = /\D/
// console.log('Example ',template)
// console.log(line_1,' ---> ', template.test(line_1))
// console.log(line_2,' ---> ', template.test(line_2))
// console.log(line_3,' ---> ', template.test(line_3))

// template = /4$/
// console.log('Example ',template)
// console.log(line_1,' ---> ', template.test(line_1))
// console.log(line_2,' ---> ', template.test(line_2))
// console.log(line_3,' ---> ', template.test(line_3))

// template = /[^234]/
// console.log('Example ',template)
// console.log(line_1,' ---> ', template.test(line_1))
// console.log(line_2,' ---> ', template.test(line_2))
// console.log(line_3,' ---> ', template.test(line_3))

// template = /\W/
// console.log('Example ',template)
// console.log(line_1,' ---> ', template.test(line_1))
// console.log(line_2,' ---> ', template.test(line_2))
// console.log(line_3,' ---> ', template.test(line_3))


// template = /^\D{2}/
// console.log('Example ',template)
// console.log(line_1,' ---> ', template.test(line_1))
// console.log(line_2,' ---> ', template.test(line_2))
// console.log(line_3,' ---> ', template.test(line_3))

// template = /^\d+[!]/
// console.log('Example ',template)
// console.log(line_1,' ---> ', template.test(line_1))
// console.log(line_2,' ---> ', template.test(line_2))
// console.log(line_3,' ---> ', template.test(line_3))

// let phone = '+380956523654'


// template = /^\+[0-9]{12}$/
// console.log(phone,template.test(phone))

// let str = 'HTTPS'
// template = /https?/i
// console.log(str, ' --> ', template.test(str))

// template = /[0-9]{3}/g
// let str_1 = '123abc456qwer114'
// console.log(str_1,' ---> ', template.exec(str_1))
// console.log(str_1,' ---> ', template.exec(str_1))
// console.log(str_1,' ---> ', template.exec(str_1))


// line_3 = '652 - 536 - 589'
// console.log(line_3,' ---> ', line_3.replace(/[- ]/g,''))
// console.log(line_3,' ---> ', line_3.replace(/[- ]/,''))
// console.log(line_3,' ---> ', line_3.replace(/[- ]/,''))

// console.log(line_3, '--->', line_3.split(/\D+/))
// template = /\d+/g
// console.log(line_3, ' ---> ', line_3.match(template))

// let url = ' swapi.dev/api/planets/1/'
// template = /^\s+\S+/
// console.log(template.test(url))

// let form = document.forms[0]
// form.addEventListener('submit',(e)=>{
//     if(!checkEmail(form.email)){
//         form.email.style.border = "red"
//         e.preventDefault()
//     }
// })
// function checkEmail(email){
//     return /@/.test(email)
// }

// form.name.addEventListener('input',()=>{
//     text = form.name.value
//     console.log(text)

//     if(text[0] == " "){
//         console.log(text[0],'run')
//         form.name.style.borderColor = 'Red'
//     }
//     else{
//         form.name.style.borderColor = 'black'
//     }
// })

let form = document.forms[0]

// form.name.addEventListener('input',()=>{
//     if(form.name.value[0] == ' '){
//         form.name.classList.add('error')

//     }
// })
//console.log(form.elements[5].tagName == 'BUTTON')
//let el = document.querySelectorAll('input')
form.addEventListener('submit',(e)=>{
    if(!checkAllElement(form.elements)){
        return
    }
    
    e.preventDefault()
});

function checkEmpty(str){
    return /\w/.test(str)
}
function checkAllElement(arr)
{
    flag = true
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].tagName == 'BUTTON'){
            continue;
        }
        if(!checkEmpty(arr[i].value)){
            arr[i].classList.add('error')
            flag = false
        }
        else{

        }
    }
    return flag   
}
