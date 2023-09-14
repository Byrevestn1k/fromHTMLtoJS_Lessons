
let canvas = document.getElementById('figure')

let ctx = canvas.getContext('2d')

let x1,x2,x3,x4,y1,y2,y3,y4;

x1 = document.getElementById('x1');
x2 = document.getElementById('x2');
x3 = document.getElementById('x3');
x4 = document.getElementById('x4');
y1 = document.getElementById('y1');
y2 = document.getElementById('y2');
y3 = document.getElementById('y3');
y4 = document.getElementById('y4');

let numbers = document.querySelectorAll('input')
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('input',()=>{
        showPoints()
        drawCurve()
    })
    
}

function showPoints(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.fillStyle = 'red';

    ctx.beginPath()
    ctx.arc(x1.value,y1.value,5,0,Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = 'blue';
    ctx.beginPath()
    ctx.arc(x2.value,y2.value,5,0,Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = 'blue';
    ctx.beginPath()
    ctx.arc(x3.value,y3.value,5,0,Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = 'red';
    ctx.beginPath()
    ctx.arc(x4.value,y4.value,5,0,Math.PI * 2);
    ctx.fill();


    ctx.moveTo(x1.value,y1.value);
    ctx.setLineDash([5,15])
    ctx.lineTo(x2.value,y2.value)

    ctx.lineTo(x4.value,y4.value)
    ctx.lineTo(x3.value,y3.value)
    ctx.lineTo(x1.value,y1.value)
    ctx.strokeStyle = 'brown'
    ctx.stroke()
    ctx.setLineDash([])

}

function drawCurve(){
    ctx.beginPath()
    ctx.moveTo(x1.value,y1.value);
    ctx.bezierCurveTo(x2.value,y2.value,x3.value,y3.value,x4.value,y4.value)
    ctx.strokeStyle = 'lightblue'
    ctx.stroke();
}

showPoints()
drawCurve()