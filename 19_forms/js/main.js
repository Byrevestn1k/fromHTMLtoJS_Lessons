
let form1 = document.forms[0]

// console.log(form1.children)
// console.log(form1.elements)
form1.addEventListener('submit',(event)=>{
    //let name = form1.name.value
    //let name = form1.elements[0].value
    // let name = document.querySelector('.form1 input[type="text"]').value
    // let rem = form1.remember;
    // let male = form1.male
    // for(let i = 0; i < male.length; i++){
    //     if(male[i].checked){
    //         console.log(male[i].previousElementSibling.textContent)
    //     }
    // }
    
    // let color = form1.color
    // console.log(color.value)
    // let range = form1.range
    // let date = form1.date
    // let time = form1.time
    // time.value = "00:05";
    // console.log(time.value)
    // let pas = form1.password
    // console.log(pas.value)
    let fruit = form1.fruit
    console.log(fruit.value)
    console.log(fruit.children)
    event.preventDefault()
})

let color = document.querySelector('input[type="color"]')
color.addEventListener('change',()=>{
    form1.style.backgroundColor = color.value;
})
let name = form1.name
name.addEventListener('input',()=>{
    console.log(name.value)
})