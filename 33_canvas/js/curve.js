let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

ctx.lineWidth = 6;
ctx.strokeStyle = 'red';
ctx.fillStyle= 'pink'
ctx.beginPath()

ctx.moveTo(250,170)
ctx.bezierCurveTo(358,26,450,200,270,330)
ctx.moveTo(250,170)
ctx.bezierCurveTo(140,26,100,250,270,330)

ctx.stroke();
ctx.fill()


// let x1 = 50, y1 = 75, x2 = 250, y2 = 75;

// canvas.addEventListener('mousemove', (e) => {
//     console.log(e)
//     ctx.clearRect(0,0,canvas.width,canvas.height)
//     ctx.beginPath()
//     ctx.moveTo(50, 50)
//     ctx.quadraticCurveTo(e.offsetX, e.offsetY, 150, 100);
//     ctx.strokeStyle = 'purple'
//     ctx.lineWidth = '5'
//     ctx.stroke()
// })

// ctx.beginPath()
// ctx.moveTo(50, 50)
// ctx.quadraticCurveTo(0, 120, 150, 100);
// ctx.strokeStyle = 'purple'
// ctx.lineWidth = '5'
// ctx.stroke()