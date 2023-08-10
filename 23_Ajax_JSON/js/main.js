

// let person = {
//     name: 'Alex',
//     lastname: 'Demchyk',
//     age: 15,
//     phone: [
//         {
//             type: 'home',
//             number_phone: '45-68-95'
//         },
//         {
//             type: 'mobile',
//             number_phone: '+38066 - 458 - 62 - 63'
//         }
//     ],
//     checkAge: function () {
//         if (this.age < 18) {
//             return false
//         }
//         return true
//     },
//     photo: 'icon.jpg',
//     birthdate: undefined
// }

// console.log(person)

// let checkAge = (key,value) => {
//     if(key == 'age' && value < 18){
//         return undefined
//     }
//     return value
// }

// let str_person = JSON.stringify(person,checkAge,2)

// console.log(str_person)

// let desPerson = JSON.parse(str_person,(key,value)=>{
//     if(key == 'name' && value.length < 10){
//         return undefined
//     }
//     return value
// })

// console.log(desPerson)


let xml = new XMLHttpRequest()

let url = 'https://swapi.dev/api/people/13/'
// xml.withCredentials = true
xml.open('GET', url)
xml.responseType = 'json'
xml.send()

xml.onload = () => {
    // console.log('Status',xml.status)
    // console.log('Status text',xml.statusText)
    // console.log('readyState',xml.readyState)
    // console.log('Result',xml.response)
    // console.log('Result',xml.responseText)
    print(xml.response)
}

xml.onerror = () => {
    console.error(xml.status)
}
xml.onprogress = (event) => {
    // console.log(event.loaded)
    // console.log(event.lengthComputable)
    // console.log(event.total)
}

xml.onreadystatechange = () =>{
    if(xml.readyState == 0){
        console.log('Unsent')
    }
    if(xml.readyState == 1){
        console.log('Opened')
    }
    if(xml.readyState == 2){
        console.log('Headind_received')
    }
    if(xml.readyState == 3){
        console.log('Loading')
        //xml.abort()
    }
    if(xml.readyState == 4){
        console.log('Done')
    }
}

function print(data) {
    let ol = document.createElement('ol')
    for (const key in data) {
        ol.insertAdjacentHTML("beforeend", `<li>${key} :: ${data[key]}</li>`)
    }
    document.body.insertAdjacentElement("afterbegin", ol)
}
