class GameCube {
    constructor() {
        this.rolledNum = 0;
    }
    rollCube() {
        this.rolledNum = Math.floor(Math.random() * 6) + 1;
    }
    getRolledNum() {
        return this.rolledNum;
    }
    checkFor6() {
        if (this.rolledNum === 6)
            return true;
        return false;
    }
}
export { GameCube };
//# sourceMappingURL=gamecube.js.map