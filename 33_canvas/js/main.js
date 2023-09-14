let canvas = document.getElementById('figure');
let cctx = canvas.getContext('2d')


// cctx.beginPath()
// cctx.arc(150,100,50,0,Math.PI*2);

// cctx.clip()

// cctx.fillStyle = 'blue'
// cctx.fillRect(50,50,canvas.width,canvas.height)
// cctx.fillStyle = 'yellow'
// cctx.fillRect(145,50,10,100)
// cctx.fillRect(0,95,canvas.width,10)






// ctx.startPath()
let btn = document.querySelectorAll('.rectangle')
let btn_circle = document.querySelectorAll('.circle')
btn[0].addEventListener('click',strokeRect);
btn[1].addEventListener('click',fillRect);
btn[2].addEventListener('click',strokeFillRect);

// btn_circle[0].addEventListener('click',strokeCircle);;
// btn_circle[1].addEventListener('click',fillCircle)

function fillCircle(start,end){
    let ctx = canvas.getContext('2d')
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.beginPath();
    ctx.arc(100,100,50,start*Math.PI,end * Math.PI);
    ctx.lineTo(100,100);
    ctx.closePath();
    ctx.fillStyle = 'yellow'
    ctx.fill();
}

let start = 0,end = 0;
let input = document.querySelectorAll('input')
input[0].addEventListener('input',function(){
    start = this.value;
    // strokeCircle(start,end);
    fillCircle(start,end)
})
input[1].addEventListener('input',function(){
    end = this.value;
    // strokeCircle(start,end);
    fillCircle(start,end)

})
// function strokeCircle(start,end){
//     let ctx = canvas.getContext('2d');
//     // ctx.canvas.width = ctx.canvas.width;
    
//     ctx.clearRect(0,0,400,200)
//     ctx.beginPath();
//     ctx.strokeStyle = 'purple'
//     ctx.lineWidth = 5
//     ctx.arc(200,100,50,start,end,true)
//     ctx.stroke()
//     ctx.closePath();
//     // ctx.beginPath()
//     // ctx.fillStyle = 'yellow';   
//     // ctx.rect(10,10,100,100);
//     // ctx.fill();
//     // ctx.closePath();
// }

function strokeRect(){
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,400,200)
    ctx.strokeStyle = 'red'
    ctx.lineWidth = 5;
    ctx.rect(100,50,200,100);
    ctx.stroke();
}
function fillRect(){
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,400,200)
    ctx.fillStyle = 'red'
    ctx.fillRect(100,50,150,75);
    ctx.fillStyle = 'green'
    ctx.fillRect(150,100,100,50);
    // ctx.fill();
}
function strokeFillRect(){
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,400,200)
    ctx.strokeStyle = 'brown'
    ctx.lineWidth = 5
    ctx.fillStyle = 'red'
    ctx.rect(100,50,200,100);
    ctx.fill();
    ctx.stroke()
}
// ctx.strokeStyle = 'red';
// ctx.lineWidth = 5;
// ctx.moveTo(10,10); // (x,y)
// ctx.lineTo(230,70);
// ctx.stroke();

// ctx.strokeStyle = 'green'
// ctx.lineTo(10,150);
// ctx.stroke();

// ctx.lineTo(10,10);
// ctx.stroke();
// // ctx.closePath();
// ctx.clearRect(0,0,400,200);
// // ctx.strokeStyle = 'brown'
// ctx.fillStyle = 'orange'
// ctx.rect(200,100,100,50);
// // ctx.stroke()
// ctx.fill()