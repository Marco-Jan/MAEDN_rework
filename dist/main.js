import { Player } from "./Components/player";
import { Play } from "./State/play";
import { StartScreen } from "./View/startscreen";
// StartScreen-Instanz erstellen
const start = new StartScreen();
// Event-Listener für den Start-Button
const startButton = document.getElementById("startButton");
startButton.addEventListener("click", () => {
    // Prüfe, ob alle Farben gültig sind
    if (checkForStart()) {
        const play = new Play(start);
        const selectedColorP1 = document.getElementById('colorP1').value;
        const player1Name = document.getElementById('playerOne').value || 'Player1';
        const selectedColorP2 = document.getElementById('colorP2').value;
        const player2Name = document.getElementById('playerTwo').value || 'Player2';
        const selectedColorP3 = document.getElementById('colorP3').value;
        const player3Name = document.getElementById('playerThree').value || 'Player3';
        const selectedColorP4 = document.getElementById('colorP4').value;
        const player4Name = document.getElementById('playerFour').value || 'Player4';
        //TODO: schaun ob ich den defauldname besser lösen kann _> in der PlayerKlasse mit gameboard verbunden placeFigure MEthode
        const myPlayer1 = new Player(selectedColorP1, player1Name, "Player1");
        play.addPlayer(myPlayer1);
        const myPlayer2 = new Player(selectedColorP2, player2Name, "Player2");
        play.addPlayer(myPlayer2);
        const myPlayer3 = new Player(selectedColorP3, player3Name, "Player3");
        play.addPlayer(myPlayer3);
        const myPlayer4 = new Player(selectedColorP4, player4Name, "Player4");
        play.addPlayer(myPlayer4);
        // Spiel starten
        play.playGame(myPlayer2);
    }
    else {
        console.log("Farbauswahl ungültig. Bitte wähle für jeden Spieler eine einzigartige Farbe.");
    }
});
// Funktion zur Überprüfung der Farbauswahl
function checkForStart() {
    const selectedColorP1 = document.getElementById('colorP1').value;
    const selectedColorP2 = document.getElementById('colorP2').value;
    const selectedColorP3 = document.getElementById('colorP3').value;
    const selectedColorP4 = document.getElementById('colorP4').value;
    // Prüfe, ob alle Farben eindeutig sind
    if (checkColor(selectedColorP1, selectedColorP2, selectedColorP3, selectedColorP4)) {
        console.log("Farbauswahl gültig");
        return true;
    }
    else {
        console.log("Farbauswahl ungültig. Mehrere Spieler haben dieselbe Farbe.");
        return false;
    }
}
function checkColor(selectedColorP1, selectedColorP2, selectedColorP3, selectedColorP4) {
    const colors = [selectedColorP1, selectedColorP2, selectedColorP3, selectedColorP4];
    const uniqueColors = new Set(colors);
    return uniqueColors.size === colors.length;
}
//# sourceMappingURL=main.js.map