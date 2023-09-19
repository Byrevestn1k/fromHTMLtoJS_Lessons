import { Grid } from "./grid.js";


export class Game {
    constructor(gridElement, mines = 10) {
        this.board = new Grid(gridElement, mines == 10 ? 10 : mines == 40 ? 18 : 30)
        this.boardValue = this.helperArray(0)
        this.flags = this.helperArray(false)
        this.mines = mines;
        this.counter = 0;
        this.placeMines()
        this.handlerClick()
    }

    handlerClick() {
        for (let i = 0; i < this.board.length; i++) {
            for (let j = 0; j < this.board.length; j++) {
                this.board[i][j].addEventListener('click', () => {
                    this.reveload(i, j)
                })
            }
        }
    }
    helperArray(value) {
        let tmp = []
        for (let i = 0; i < this.board.length; i++) {
            let row = []
            for (let j = 0; j < this.board.length; j++) {
                row.push(value)
            }
            tmp.push(row)
        }
        return tmp;
    }
    placeMines() {
        let counter = 0
        while (counter < this.mines) {
            let x = parseInt(Math.random() * this.board.length)
            let y = parseInt(Math.random() * this.board.length)
            if (this.boardValue[x][y] != -1) {
                this.boardValue[x][y] = -1
                counter++;
            }
        }
    }
    countMines(x, y) {
        let counter = 0;
        if (x > 0 && this.boardValue[x - 1][y] == -1) {
            counter++;
        }
        if (x < this.board.length - 1 && this.boardValue[x + 1][y] == -1) {
            counter++;
        }
        if (y > 0 && this.boardValue[x][y - 1] == -1) {
            counter++;
        }
        if (y < this.board.length - 1 && this.boardValue[x][y + 1] == -1) {
            counter++;
        }
        if (x > 0 && y > 0 && this.boardValue[x - 1][y - 1] == -1) {
            counter++;
        }
        if (x < this.board.length - 1 && y > 0 && this.boardValue[x + 1][y - 1] == -1) {
            counter++;
        }
        if (x > 0 && y < this.board.length - 1 && this.boardValue[x - 1][y + 1] == -1) {
            counter++
        }
        if (x < this.board.length - 1 && y < this.board.length - 1 && this.boardValue[x + 1][y + 1] == -1) {
            counter++
        }
        return counter;
    }
    reveload(x, y) {
        if (this.boardValue[x][y] == -1) {

        }
        else if (!this.flags[x][y]) {
            let mines = this.countMines(x, y);
            this.flags[x][y] = true;
            this.board[x][y].textContent = mines;
            this.print(x, y)
            if (mines == 0) {
                if (x > 0) {
                    this.reveload(x - 1, y);
                }
                if (x < this.board.length - 1) {
                    this.reveload(x + 1, y);
                }
                if (y > 0) {
                    this.reveload(x, y - 1);
                }
                if (y < this.board.length - 1) {
                    this.reveload(x, y + 1);
                }
                if (x > 0 && y > 0) {
                    this.reveload(x - 1, y - 1)
                }
                if (x < this.board.length - 1 && y < this.board.length - 1) {
                    this.reveload(x + 1, y + 1)
                }
                if (x > 0 && y < this.board.length - 1) {
                    this.reveload(x - 1, y + 1)
                }
                if (y > 0 && x < this.board.length - 1) {
                    this.reveload(x + 1, y - 1)
                }
            }
        }
        if(this.countFlags() == (this.flags.length ** 2) - this.mines){
            this.winGame()
        }
    }

    print(x, y) {
        this.board[x][y].classList.add('visible')
        if (this.board[x][y].textContent == 0) {
            this.board[x][y].textContent = " "
        }
        else if (this.board[x][y].textContent == 1) {
            this.board[x][y].style.color = 'blue'
        }
        else if (this.board[x][y].textContent == 2) {
            this.board[x][y].style.color = 'green'
        }
        else if (this.board[x][y].textContent == 3) {
            this.board[x][y].style.color = 'red'
        }
        else if (this.board[x][y].textContent == 4) {
            this.board[x][y].style.color = 'darkblue'
        }
        else if (this.board[x][y].textContent == 5) {
            this.board[x][y].style.color = 'brown'
        }
    }
    // перемога, всі відкриті комірки крім тих де міни
    winGame() {
        let el = document.querySelector('.win')
        el.classList.add('show') 
        el.addEventListener('click',(e)=>{
            if(e.target.tagName == 'BUTTON'){

            }
        })
    }
    countFlags(){
        let number = 0;
        for (let i = 0; i < this.flags.length; i++) {
            for (let j = 0; j < this.flags.length; j++) {
                if(this.flags[i][j]){
                    number++;
                }
            }
        }
        return number;
    }
    // winGame() // перемога, всі відкриті комірки крім тих де міни
    // endGame() // коли натиснули по комірці з міною
    // restartGame() // почати гру спочатку
    // helpHandler() // через ПКМ поставити флажок

}