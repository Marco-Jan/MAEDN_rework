import { Figure } from "./figure";
class Player {
    constructor(color, myName, playerName) {
        this.color = color;
        this.name = myName;
        this.defaultName = playerName;
        this.myFigures = [];
        this.createFigures();
        this.myPlayerEndzone = [0, 0, 0, 0];
    }
    createFigures() {
        for (let i = 1; i < 5; i++) {
            let figure = new Figure(this.color, i);
            this.myFigures.push(figure);
        }
    }
    //TODO Getgebaut für die abfrage 
    getDefaultName() {
        return this.defaultName;
    }
    addFigureInEndzone(figure) {
        this.myPlayerEndzone[figure.getEndzonePosition()] = figure;
    }
    getFiguresOnBank() {
        let myFiguresOnBank = [];
        this.myFigures.forEach((element) => {
            if (!element.isOnField) {
                myFiguresOnBank.push(element.id);
            }
        });
        return myFiguresOnBank;
    }
    checkAllFiguresInEndzone() {
        return this.myFigures.every((figure) => figure.isInEndzone);
    }
    checkFiguresOnFieled() {
        if (this.myFigures.find((e) => e.isOnField === true)) {
            console.log("hello true on field");
            return true;
        }
        else {
            return false;
        }
    }
}
export { Player };
//# sourceMappingURL=player.js.map