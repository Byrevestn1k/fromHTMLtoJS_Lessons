
let listImg = document.querySelectorAll('.img img');
let target = null;
for (let i = 0; i < listImg.length; i++) {
    listImg[i].addEventListener('click', () => {

        // if(target != null) target.classList.toggle('active')
        // listImg[i].classList.add('active');
        // target = listImg[i];

        // for(let j = 0; j < listImg.length; j++)
        // {
        //     if(listImg[j].classList.contains('active') && j != i){
        //         listImg[j].classList.remove('active')
        //     }
        // }
        // listImg[i].classList.toggle('active');

        // if (target == -1) {
        //     listImg[i].classList.toggle('active');

        //     target = i;
        //     return;
        // }
        // if (listImg[target].classList.contains('active')) {
        //     listImg[target].classList.remove('active')
        // }
        // if (target == i) {
        //     target = -1;
        //     return;
        // }
        // listImg[i].classList.toggle('active');

        // target = i;
    });
}
