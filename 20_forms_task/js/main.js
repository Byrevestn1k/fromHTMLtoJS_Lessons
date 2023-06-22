let btn = document.querySelectorAll('section article button')
let title = document.querySelectorAll('section article h3')
let buy = document.forms[0]


for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener('click',()=>{
       buy.classList.remove('none')
       buy.bookName.value = title[i].textContent
    })
}

let getInfoBuy = (form)=>{
    const {bookName,quantity,nameUser,address,date,comment} = form
    return {
        bookName:bookName.value,
        quantity:quantity.value,
        nameUser:nameUser.value,
        address:address.value,
        date:date.value,
        comment:comment.value
    }
}

let result = (obj)=>{
    const {bookName,nameUser,address,date} = obj
    if(document.querySelector('div.result')){
        document.querySelector('div.result').remove()
    }
    let div = document.createElement('div')
    div.classList.add('result')
    let h3 = document.createElement('h3')
    h3.textContent = "Result"
    div.insertAdjacentElement('beforeend',h3)
    let article = document.createElement('article')
    let p = document.createElement('p')
    p.textContent = `${nameUser}, thanks for order!`
    article.insertAdjacentElement('beforeend',p)
    let p2 = document.createElement('p')
    p2.textContent = `Book "${bookName}" will be delivered on ${date} to ${address}`
    article.insertAdjacentElement('beforeend',p2)
    div.insertAdjacentElement('beforeend',article)
    document.querySelector('body').insertAdjacentElement('beforeend',div)
}

buy.buy.addEventListener('click',(e)=>{
    res = getInfoBuy(buy)
    buy.classList.add('none')
    // console.log(res)
    result(res)
    e.preventDefault()
})

