import { Figure } from "./figure";

class Player {
  public color: string;
  public myFigures: Figure[];
  private myPlayerEndzone: Figure[] | number[];
  private name: string;
  private defaultName;
  constructor(color: string, myName: string, playerName: string) {
    this.color = color;
    this.name = myName;
    this.defaultName = playerName;
    this.myFigures = [];
    this.createFigures();
    this.myPlayerEndzone = [0, 0, 0, 0];
  }
  createFigures(): void {
    for (let i = 1; i < 5; i++) {
      let figure = new Figure(this.color, i);
      this.myFigures.push(figure);
    }
  }
  //TODO Getgebaut für die abfrage 
  getDefaultName(){
    return this.defaultName;
  }
  addFigureInEndzone(figure: Figure): void {
    this.myPlayerEndzone[figure.getEndzonePosition()] = figure;
  }
  getFiguresOnBank() {
    let myFiguresOnBank: number[] = [];
    this.myFigures.forEach((element) => {
      if (!element.isOnField) {
        myFiguresOnBank.push(element.id);
      }
    });
    return myFiguresOnBank;
  }
  checkAllFiguresInEndzone(): boolean {
    return this.myFigures.every((figure) => figure.isInEndzone);
  }
  checkFiguresOnFieled(): boolean {
    if (this.myFigures.find((e) => e.isOnField === true)) {
      console.log("hello true on field");
      return true;
    } else {
      return false;
    }
  }
}

export { Player };
