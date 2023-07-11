


// localStorage.setItem('Test','Hello World')
// localStorage.setItem('Test2','Test test')

//document.write(localStorage.getItem('Test'))

//localStorage.removeItem('Test2')

// console.log(localStorage.key(0))
// console.log(localStorage.key(1))
// console.log(localStorage.length)

// localStorage.clear()
let obj = {
}
window.addEventListener('DOMContentLoaded',()=>{
    document.querySelector('input').value = localStorage.getItem('number')
})

document.querySelector('input').addEventListener('input',function(){
   obj.number = this.value
})

let ul = document.querySelector('ul')
ul.addEventListener('click',(event)=>{
    if(event.target.tagName == 'UL'){
        return
    }
    for (let i = 0; i < ul.children.length; i++) {
       ul.children[i].classList.remove('active');
    }
    let tmp = event.target
    obj.color = tmp.dataset.color
    tmp.classList.add('active')
})

document.querySelector('button').addEventListener('click',()=>{
    if('color' in obj && 'number' in obj)
    {
        localStorage.setItem('order',JSON.stringify(obj))
        //window.open('page.html')
    }
})