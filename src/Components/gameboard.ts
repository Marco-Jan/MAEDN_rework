import { Player } from "./player";
import { Figure } from "./figure";


class GameBoard{
    public gameboard: Figure[] | number[];
    private figureStartPoint: number;

    constructor(){
        this.gameboard = Array(40).fill(0);
        this.figureStartPoint = 0;
    }
    placeFigure(player: Player, figure: Figure): void{
        const spawningFigure = figure;
        {       
    //TODO: player.color muss auf nahmen geändert werden. abfrage über namen, so kann man das spielfeld behalten
            if(spawningFigure){
                if(player.getDefaultName() == "Player1"){                   
                    this.figureStartPoint = 0;          
                }
                else if(player.getDefaultName() == "Player2"){
                    this.figureStartPoint = 10
                }
                else if(player.getDefaultName() == "Player3"){
                    this.figureStartPoint = 20
                }
                else if(player.getDefaultName() == "Player4"){
                    this.figureStartPoint = 30                  
                }
                if(this.isOccupied(this.figureStartPoint)){
                    this.resetFigure(this.figureStartPoint);
                }
                this.gameboard[this.figureStartPoint] = spawningFigure;
                spawningFigure.placeOnField();
            } else{
                console.log("Alle Figuren am Feld");                
            }

        }
    }
    moveFigure(figure: Figure, rolledNum: number): void{
        const indexOfFigure = this.getIndexOfFigure(figure);
        let newPosition = indexOfFigure + rolledNum;

        if(newPosition >= 40){
            newPosition = newPosition - 40;            
        }

        if(this.isOccupied(newPosition)){
            this.resetFigure(newPosition);            
        }
        this.removeFigureStartPoint(figure);
        if(!figure.getIsInEndzone()){
            this.gameboard[newPosition] = figure;
        }
        
    }
    removeFigureStartPoint(figure:Figure): void{
        const indexOfFigure = this.getIndexOfFigure(figure);
        this.gameboard[indexOfFigure] = 0;
    }

    isOccupied(position: number): boolean{
        return this.gameboard[position] instanceof Figure;
    }

    resetFigure(position: number): void{
        const occupiedFigure = this.gameboard[position] as Figure;
        occupiedFigure.removeFromField();
    }

    getIndexOfFigure(figure:Figure): number{
        return this.gameboard.findIndex((x) => x === figure);
    }
}

export {GameBoard};