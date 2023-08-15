

// Client --> Server --> DataBase --> Server --> Client



// console.log('Клієнт виконує запит, отримати список студентів')
// setTimeout(function(){
//     console.log('Сервер отримує запит і виконує запит до бд, отримати список студентів')

//     setTimeout(function(){
//         console.log('ДБ. Отрималиа запит, формує список студентів')

//         setTimeout(function(){
//             console.log('Сервер: Отримав список, трансформує дані для клієнта')

//             setTimeout(function(){
//                 console.log('Клієнт: Отримав список і відображає його')
//             },2000)
//         },500)
//     },500)
// },1000)


// let promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log('Клієнт: запитує список студентів в дб')
//         console.log('...')
//         resolve()
//     }, 1000)
// })

// promise.then(function () {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             console.log('Сервер: Запитує список студентів у бд')
//             console.log('...')
//             resolve()
//         }, 500)
//     })
// })
// .then(function(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             let users = [
//                 {id:1, name:'Max'},
//                 {id:2, name:'Dima'},
//             ]
//             console.log('БД: Формує список студентів',users)
//             console.log('....')
//             resolve(users)
//         },1000)
//     })
// })
// .then(function(dbData){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             console.log('Сервер трансформує список студентів')
//             console.log('.....')
//             console.log(dbData)
//             let users = dbData.map(function(user){
//                 return{
//                     id:user.id,
//                     name: user.name,
//                     timeStamp:Date.now()
//                 }
//             })
//             reject(users)
//         },500)
//     })
// })
// .then(function(resServer){
//     setTimeout(function(){
//         console.log('Клієнт: отримав список студентів')
//         console.log('Клієнт: відображаю їх',resServer)
//         console.log('....')
//     },1000)
// })
// .catch(function(error){
//     console.log('Error',error)
// })
// .finally(function(){
//     console.log('Finally')
// })


let url = 'https://jsonplaceholder.typicode.com/posts?userId=2'

let promise = new Promise(function(resolve,reject){
    let xml = new XMLHttpRequest()
    //xml.withCredentials = true
    xml.open('GET',url)
    xml.responseType = 'json'
    xml.send()

    xml.onload = function(){
        if(xml.status == 200){
            resolve(xml.response)
        }
        reject('Error')
    }
})
promise.then(function(data){
    showuser(data)
})
.catch(function(error){
    console.log(error)
})


function showuser(data){
    console.log(data)
}