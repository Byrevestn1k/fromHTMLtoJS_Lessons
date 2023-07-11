function onPageLoaded(){

let $input = document.querySelector('.lists');
let $ul = document.querySelector('.todos');
let $span = document.querySelectorAll('.todos span');
let $save = document.querySelector('.save');
let $clear = document.querySelector('.clear');
let $tipBtn = document.querySelector('.tipBtn');
let $pencil = document.querySelector('#pencil');
let $overlay = document.querySelector('#overlay')
let $closebtn = document.querySelector('.closebtn')

function deleteTodo(){
    for(let i=0; i<$span.length; i++){
        $span[i].addEventListener('click',function(){
            this.parentElement.remove();
            event.stopPropagation();
        })
    }
}

$input.addEventListener('keypress',function(key){
    if(key.which == 13) {
        let li = document.createElement('li');
        let span = document.createElement('span');
        let icon = document.createElement('i');

        let newTodo = this.value;
        this.value = '';

        icon.classList.add('fas','fa-trash-alt');
        span.insertAdjacentElement('afterbegin',icon);
        li.textContent = newTodo;
        li.insertAdjacentElement('afterbegin',span);
        $ul.insertAdjacentElement('afterbegin',li);
        span.addEventListener('click',function(){
            this.parentElement.remove();
            event.stopPropagation();
        })
    }
    })
    deleteTodo();

    $ul.addEventListener('click',function(event){
        if(event.target.tagName == 'LI'){
            event.target.classList.toggle('checked')
        }
        
    })

    $save.addEventListener('click',function(){
        localStorage.setItem('todoList',$ul.innerHTML)
    })
    $clear.addEventListener('click',function(){
        $ul.innerHTML = '';
        localStorage.removeItem('todoList',$ul.innerHTML)
    })
    function loadTodo(){
        if(localStorage.getItem('todoList')){
            $ul.innerHTML = localStorage.getItem('todoList');
            let span = document.querySelectorAll('.todos span')
            for(let i=0; i<span.length; i++){
                span[i].addEventListener('click',function(){
                    this.parentElement.remove();
                    event.stopPropagation();
                })
            }
        }
    }
    $pencil.addEventListener('click',function(){
        $input.classList.toggle('display')
    })
    $tipBtn.addEventListener('click',function(){
        $overlay.style.height = '100vh'
    })
    $closebtn.addEventListener('click',function(){
        $overlay.style.height = '0'
    })
    loadTodo();
}
document.addEventListener('DOMContentLoaded',onPageLoaded)