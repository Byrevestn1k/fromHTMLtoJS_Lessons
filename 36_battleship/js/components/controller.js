import { Model } from "./model.js";
import { View } from "./view.js";

export class Controller{
    constructor(gridElement){
        this.view = new View(gridElement)
        this.board = this.view.getBoard();
        this.data = new Model().getShips();
        this.fire = 0;
    }

    startGame(){
        for (let i = 0; i < this.board.length; i++) {
            for (let j = 0; j < this.board.length; j++) {
                this.board[i][j].addEventListener('click',()=>{
                    if(this.checkShipFire(i,j)){
                        this.view.showShips(this.board[i][j])
                        this.fire++;
                        if(this.fire == 20){
                            this.endGame();
                        }
                    }
                    else{
                        this.view.showHits(this.board[i][j])
                    }
                })
            }
        }
    }
    endGame(){
        this.view.winGame();
    }

    checkShipFire(x,y){
        for (let i = 0; i < this.data.length; i++) {
            for (let j = 0; j < this.data[i].location.length; j++) {
                if(this.data[i].location[j][0] == x && this.data[i].location[j][1] == y){
                    return true;
                } 
            }
        }
        return false;
    }
}