
let arrow = document.querySelector(".arrow");

window.addEventListener('scroll', (e) => {

    let y = window.scrollY;
    if (y > window.innerHeight) {
        arrow.style.transform = "scale(1)"
    }
})
arrow.addEventListener('click', () => {
    window.scrollBy(0, -window.scrollY);
    arrow.style.transform = "scale(0)"
})


let btn = document.querySelector("button")
let btnCl = document.querySelectorAll("button")[1]
let win;
btn.addEventListener('click', () => {
    win = window.open('https://developer.mozilla.org/ru/docs/Web/API/Window/scrollBy', 'test', 'resizable')
    win.resizeBy(200,200)
    win.moveTo(200,200)
})

btnCl.addEventListener('click', () => {
    win.close();
})