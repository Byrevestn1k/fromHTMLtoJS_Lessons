let images = document.querySelectorAll('.minImg img');
//let srcImg = [];

let index = 0;


let setImg = (img,url) =>{
    img.setAttribute('src',url)
}

for (let i = 0; i < images.length; i++) {
   // srcImg.push(images[i].getAttribute('src'))

    images[i].addEventListener('click', () => {
    // img.src = images[i].getAttribute('src');
    setImg(img,images[i].getAttribute('src'))
    index = i;
    })
}

let left = document.querySelector('#left')
let right = document.querySelector('#right')
let img = document.querySelector('#img')

right.addEventListener('click', () => {
    index++;
    if (index == images.length) index = 0;
    setImg(img,images[index].getAttribute('src'))
})