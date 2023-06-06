

//document.querySelector('p').style.color="red";
// document.addEventListener('DOMContentLoaded', () => {
//     document.querySelector('p').style.color = "red";
//     alert('DOMContentLoaded');
// })
// window.onload = () => {
//     alert('load');
// }
// window.onbeforeunload =  (e) => {
//     if (document.querySelector('textarea').value.length > 0) {
//         console.log(e);
//         e.returnValue = 'beforeunload';
//         return 'beforeunload';
//     }
//     return null;
// }

// let imgLoad = (text) => {
//     document.querySelector('p').innerHTML += `${text} Load <br>`;
// }
// let imgError = (text) => {
//     document.querySelector('p').innerHTML += `${text} Error <br>`;
// }

// document.querySelector('#img1').addEventListener('load', ()=>{
//     document.querySelector('p').innerHTML += `Img 1 Load <br>`;
// });
// document.querySelector('#img2').addEventListener('load',()=>{
//     document.querySelector('p').innerHTML += `Img 2 Load <br>`;
// })

// document.querySelector('#img1').addEventListener('error', ()=>{
//     document.querySelector('p').innerHTML += `Img 1 Error <br>`;
// })
// document.querySelector('#img2').addEventListener('error', ()=>{
//     document.querySelector('p').innerHTML += `Img 2 Error <br>`;
//     document.querySelector('#img2').src = "https://www.online-tech-tips.com/wp-content/uploads/2022/03/image-41.jpeg";
// })

// function addMsg(text){
//     document.querySelector('p').innerHTML += `${text}  <br>`;
// }


let colors = ['red', 'green', 'purple', 'brown', 'yellow', 'blue', 'orange']

let i = 0;
let mixColor = () => {
    document.body.style.backgroundColor = colors[i];
    i++;
    if (i == colors.length) i = 0;

}

// let n;

// document.querySelectorAll('button')[0].addEventListener('click', () => {
//     n = setInterval(mixColor, 1000);
// })
// document.querySelectorAll('button')[1].addEventListener('click', () => {
//     clearInterval(n)
// })
let p = document.querySelector('p');
let x = 0, y = 0;
let heightW, widthW;
let widthBox = p.getBoundingClientRect().width;
let heightBox = p.getBoundingClientRect().height;
let left = () => {
    x-=5;
    if(x < 0) x = 0;
    p.style.left = `${x}px`;
}
let right = () => {
    x+=5;
    widthW = window.innerWidth;
    if(x > widthW - widthBox){
        x = widthW - widthBox;
    }
    p.style.left = `${x}px`;
}
let up = () => {
    y-=5;
    if(y < 0) y = 0;
    p.style.top = `${y}px`;
}
let down = () => {
    y+=5;
    heightW = window.innerHeight;
    if(y > heightW - heightBox){
        y = heightW - heightBox;
    }
    p.style.top = `${y}px`;
}

window.addEventListener('keydown', (e) => {
    switch(e.which)
    {
        case 37:{
            left();
            break;
        }
        case 39:{
            right();
            break;
        }
        case 38:{
            up();
            break;
        }
        case 40:{
            down();
            break;
        }
    }
})