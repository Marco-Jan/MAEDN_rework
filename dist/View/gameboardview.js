import { PlayField } from "./playfield";
import { PlayerZones } from "./playerZones";
import { GameCubeUi } from "./gamecubeUi";
class GameBoardUi {
    constructor() {
        this.playField = new PlayField();
        this.playerZones = new PlayerZones();
        this.gameCubeUi = new GameCubeUi();
    }
    createGrid() {
        const parentElement = document.getElementById("playField");
        for (let row = 0; row < 11; row++) {
            for (let column = 0; column < 11; column++) {
                const newDiv = document.createElement("div");
                const targetCoordinates = [row, column];
                this.playField.addId(newDiv, targetCoordinates);
                this.playerZones.setEndzone(newDiv, targetCoordinates);
                this.playerZones.setStartPoints(newDiv, targetCoordinates);
                this.playerZones.setReserveBank(newDiv, targetCoordinates);
                this.gameCubeUi.createGamecubeUi(newDiv, targetCoordinates);
                parentElement.appendChild(newDiv);
                //newDiv.innerHTML = `${row} + ${column}`;
            }
        }
    }
    updateGameBoardUi(gameBoard) {
        for (let i = 0; i < gameBoard.gameboard.length; i++) {
            const figure = gameBoard.gameboard[i];
            const playField = document.getElementById(`playfield-${i}`);
            playField.className = "playContainer";
            if (gameBoard.gameboard[i] !== 0) {
                playField.classList.add(`${figure.color}Figure`);
                playField.classList.add(`figure`);
                playField.classList.add(`${figure.color}Figure${figure.id}`);
            }
            if (playField.id === "playfield-0") {
                playField.classList.add("redZone");
            }
            if (playField.id === "playfield-10") {
                playField.classList.add("blueZone");
            }
            if (playField.id === "playfield-20") {
                playField.classList.add("greenZone");
            }
            if (playField.id === "playfield-30") {
                playField.classList.add("yellowZone");
            }
        }
    }
    updateGameboardPlayerBank(players) {
        //TODO: abfrage der Farben nun auf getDefaultColor
        players.forEach((player) => {
            let myFiguresOnBank = player.getFiguresOnBank();
            if (myFiguresOnBank) {
                for (let i = 1; i <= player.myFigures.length; i++) {
                    const bankElement = document.getElementById(`${player.getDefaultColor()}Bank-${i}`);
                    //console.log(bankElement, "Bankelemnt");
                    if (myFiguresOnBank.includes(i)) {
                        bankElement.classList.add(`${player.getDefaultColor()}Figure`);
                        bankElement.classList.add(`figure`);
                        bankElement.classList.add(`${player.getDefaultColor()}Figure${i}`);
                    }
                    else {
                        bankElement.classList.remove(`${player.getDefaultColor()}Figure`);
                        bankElement.classList.remove(`figure`);
                        bankElement.classList.remove(`${player.getDefaultColor()}Figure${i}`);
                    }
                }
            }
        });
    }
    updateGameBoardPlayerEndzone(player) {
        for (let i = 0; i < player.myFigures.length; i++) {
            const endzoneElement = document.getElementById(`${player.getDefaultColor()}-${i}`);
            if (player.myFigures[i].isInEndzone) {
                endzoneElement.classList.add(`${player.getDefaultColor()}Figure`);
            }
            else {
                endzoneElement.classList.remove(`${player.getDefaultColor()}Figure`);
            }
        }
    }
    highlightFiguresToMove(currentPlayer) {
        const figuresToMove = document.querySelectorAll(`.${currentPlayer.getDefaultColor()}Figure`);
        figuresToMove.forEach(element => {
            element.classList.add('playerTurn');
        });
    }
    unlightFiguresToMove(currentPlayer) {
        document.querySelectorAll(`.playContainer`).forEach(element => {
            element.classList.remove('playerTurn');
        });
    }
}
export { GameBoardUi };
//# sourceMappingURL=gameboardview.js.map