class RootFigure{
    #name;
    constructor(name,color, tagName= 'div'){
        this.color = color
        this.el = document.createElement(tagName)
        this.#name = name

        this.el.addEventListener('mouseenter',()=>{
            this.hide()
        })

        this.el.addEventListener('mouseleave',()=>{
            this.show()
        })
    }
    hide(){
        this.el.style.opacity = '0'
        this.el.style.cursor = 'pointer'
    }
    show(){
        this.el.style.opacity = '1'
    }
    get(){
        return this.#name
    }
    set(newName){
        // if(newName.length <1){
        //     console.error('Error')
        // }
        // else{
        //     this.#name = newName
        // }
        this.#name = newName.length < 1 ? "NonName" : newName 
    }
    append(){
        document.querySelector('.root').insertAdjacentElement('beforeend',this.el)
    }
    create(){
        this.el.style.background = this.color
        this.el.textContent = this.#name
        this.el.style.display = 'flex'
        this.el.style.justifyContent = 'center'
        this.el.style.alignItems= 'center'
        this.el.style.fontSize= '28px'
        this.append()
    }
}

class Circle extends RootFigure{
    constructor(name,color,size){
        super(name,color)

        this.size = size
    }

    createCircle(){
        this.el.style.borderRadius = '50%'
        this.el.style.height = this.el.style.width = `${this.size}px`
        this.create()
    }
}
class Rectangle extends RootFigure{
    constructor(name,color,height,width){
        super(name,color)

        this.height = height
        this.width = width
    }
    
    createRect(){
        this.el.style.height = `${this.height}px`
        this.el.style.width = `${this.width}px`
        this.create()
    }
}
// let figure = new RootFigure()
// // figure.#name = 'Circle'
// // console.log(figure.#name)
// figure.set('')
// console.log(figure.get())

let circle = new Circle('Circle','red',400)
circle.createCircle()
let rect = new Rectangle("Rectangle",'green', 300,500)
rect.createRect()


