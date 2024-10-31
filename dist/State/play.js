import { GameCube } from "../Components/gamecube";
import { GameBoard } from "../Components/gameboard";
import { GameBoardUi } from "../View/gameboardview";
import { GameRules } from "./gamerules";
class Play {
    constructor(startScreen) {
        this.gameBoard = new GameBoard();
        this.players = [];
        this.currentPlayerIndex = 0;
        this.gameCube = new GameCube();
        this.gameBoardUi = new GameBoardUi();
        this.createNewGame();
        this.gamePhase = 0;
        this.gameRules = new GameRules();
        this.startScreen = startScreen;
    }
    createNewGame() {
        this.gameBoardUi.createGrid();
    }
    addPlayer(player) {
        this.players.push(player);
    }
    playGame(player1) {
        console.log(player1, "player1");
        const grid = document.getElementById("playField");
        this.startScreen.changeScreens();
        this.gameBoardUi.updateGameboardPlayerBank(this.players);
        grid.addEventListener("click", (e) => {
            this.checkGamePhase(e.target);
            this.gameBoardUi.updateGameBoardUi(this.gameBoard);
        });
    }
    checkGamePhase(element) {
        let idNum;
        const currentPlayer = this.getCurrentPlayer();
        console.log("player ", currentPlayer);
        this.gameBoardUi.updateGameBoardUi(this.gameBoard);
        //gamephase 1 | würfeln
        if (this.gameRules.getGamePhase() === 0 &&
            element.id === "gameCube") {
            this.rollDice();
            if (this.gameRules.checkCanMoveOnThrow(this.gameCube, currentPlayer)) {
                this.gameBoardUi.highlightFiguresToMove(currentPlayer);
                this.gameRules.setGamePhaseTwo();
                this.gameRules.resetNoFigureOnFieldAttempts();
            }
            else if (this.gameRules.getNoFigureOnFieldAttempts() < 2) {
                this.gameRules.addNoFigureOnFieldAttempts();
            }
            else {
                this.gameRules.resetNoFigureOnFieldAttempts();
                this.nextTurn();
            }
        }
        //gamephase 2 | Figurebewegung
        else if (this.gameRules.getGamePhase() === 1) {
            idNum = this.getChosenFigureId(currentPlayer, element);
            if (typeof idNum == "number") {
                this.moveCurrentPlayerFigure(currentPlayer.myFigures[idNum]);
                this.gameBoardUi.updateGameboardPlayerBank(this.players);
                this.gameBoardUi.updateGameBoardPlayerEndzone(this.getCurrentPlayer());
                this.nextTurn();
                this.gameRules.setGamePhaseOne();
                this.gameBoardUi.unlightFiguresToMove(currentPlayer);
            }
        }
        if (currentPlayer.checkAllFiguresInEndzone()) {
            console.log(`Player ${currentPlayer.color} has won`);
            this.endGame();
        }
    }
    endGame() {
        this.gameRules.setEndGame();
    }
    getChosenFigureId(currentPlayer, element) {
        let figureId = null;
        if (element.classList.contains(`${currentPlayer.color}Figure1`)) {
            return (figureId = 0);
        }
        else if (element.classList.contains(`${currentPlayer.color}Figure2`)) {
            return (figureId = 1);
        }
        else if (element.classList.contains(`${currentPlayer.color}Figure3`)) {
            return (figureId = 2);
        }
        else if (element.classList.contains(`${currentPlayer.color}Figure4`)) {
            return (figureId = 3);
        }
        return figureId;
    }
    getCurrentPlayer() {
        return this.players[this.currentPlayerIndex];
    }
    nextTurn() {
        if (!this.gameRules.handleGameCube6(this.gameCube)) {
            this.currentPlayerIndex =
                (this.currentPlayerIndex + 1) % this.players.length;
        }
    }
    rollDice() {
        this.gameCube.rollCube();
        this.gameBoardUi.gameCubeUi.showGameCubeNum(this.gameCube.rolledNum);
        //const getCurrentPlayer = this.getCurrentPlayer();
        //TODO Würfelanimatione, Zug geht verloren wenn 6
        /*
        for (let i = 0; i < 10; i++) {
          this.rollTimeout(i);
        } */
    } /*
    rollTimeout(i: number) {
      setTimeout(() => {
        this.gameCube.rollCube();
        this.gameBoardUi.gameCubeUi.showGameCubeNum(this.gameCube.getRolledNum());
      }, 40 * i);
    }
   */
    moveCurrentPlayerFigure(figureToMove) {
        const currentPlayer = this.getCurrentPlayer();
        const rolledNum = this.gameCube.getRolledNum();
        const targetPos = rolledNum + figureToMove.position;
        if (figureToMove.isOnField &&
            targetPos <= 40 &&
            figureToMove.getMaxDistance(targetPos)) {
            this.gameBoard.moveFigure(figureToMove, rolledNum);
            figureToMove.moveOnPlayerBoard(rolledNum);
        }
        else if (figureToMove.isOnField &&
            targetPos > 40 &&
            figureToMove.getMaxDistance(targetPos)) {
            figureToMove.moveOnPlayerBoard(rolledNum);
            //currentPlayer.addFigureInEndzone(figureToMove);
            figureToMove.setIsInEndzone();
            figureToMove.removeFromField();
            this.gameBoard.moveFigure(figureToMove, rolledNum);
        }
        else if (!figureToMove.isOnField) {
            figureToMove.placeOnField();
            this.gameBoard.placeFigure(currentPlayer, figureToMove);
        }
        else {
            console.log("Fehler moveCurrentPlayerFigure");
        }
    }
    isGameEnd(player) {
        return player.checkAllFiguresInEndzone();
    }
}
export { Play };
//# sourceMappingURL=play.js.map