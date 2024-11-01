class GameRules {
    constructor() {
        this.gamePhase = 0;
        this.attempt = 0;
    }
    getGamePhase() {
        return this.gamePhase;
    }
    setGamePhaseOne() {
        this.gamePhase = 0;
    }
    setGamePhaseTwo() {
        this.gamePhase = 1;
    }
    setEndGame() {
        this.gamePhase = 3;
    }
    addNoFigureOnFieldAttempts() {
        this.attempt++;
    }
    getNoFigureOnFieldAttempts() {
        return this.attempt;
    }
    resetNoFigureOnFieldAttempts() {
        this.attempt = 0;
    }
    handleGameCube6(gamecube) {
        if (gamecube.checkFor6()) {
            this.resetNoFigureOnFieldAttempts();
        }
        return gamecube.checkFor6();
    }
    checkCanMoveOnThrow(gamecube, currentPlayer) {
        console.log("num =", gamecube.getRolledNum());
        if (currentPlayer.checkFiguresOnFieled()) {
            console.log("hello check on field");
            return true;
        }
        else if (gamecube.checkFor6()) {
            console.log("hello gamecube check 6");
            return true;
        }
        else {
            console.log("hello checkmove false");
            return false;
        }
    }
}
export { GameRules };
//# sourceMappingURL=gamerules.js.map