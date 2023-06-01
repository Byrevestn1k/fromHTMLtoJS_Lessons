
let pAll = document.querySelectorAll('p');
let liAll = document.querySelectorAll('li');

// for (let i = 0; i < pAll.length; i++) {
//     pAll[i].addEventListener('click', (e) => {
//         pAll[i].classList.toggle('styleP');
//     })
// }
// for (let i = 0; i < liAll.length; i++) {
//     liAll[i].addEventListener('click', (e) => {
//         liAll[i].classList.toggle('styleList');
//     })
// }
document.body.addEventListener('click',(e)=>{
    let element = e.target
   if(element.tagName == 'P' && !element.parentElement.classList.contains('block')){
    element.classList.toggle('styleP');
   }
   else if(element.tagName == 'LI'){
    element.classList.toggle('styleList')
   }
   else if(element.classList.contains('block')){
    element.style.background = 'lightblue';
   }
})
let $list = document.querySelector('.list');
console.log('next element',$list.nextElementSibling);
console.log('prev element',$list.previousElementSibling);
console.log('parent el element',$list.parentElement);
console.log('parent node element',$list.parentNode);
console.log('first child element',$list.firstElementChild);
console.log('count child element',$list.childElementCount);
console.log('count child element',$list.lastChild);
console.log('count child element',);
let $listChild = $list.children;
console.log($listChild)
// console.log('Next element',);

