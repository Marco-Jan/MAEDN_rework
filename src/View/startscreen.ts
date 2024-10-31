import { node } from "../../node_modules/webpack/types";

class StartScreen {
  colors: string[];
  constructor() {
    this.colors = ["Rot", "Blau", "Grün", "Gelb", "Pink", "Lila", "Orange", "Schwarz", "Weiß", "Braun"];
    this.createStartScreen();
    
  }
  createStartScreen() {
    const container = document.getElementById("start_ui");
    console.log("spiel start");
    
    const ue1 = document.createElement("h1");
    ue1.textContent = "Mensch Ärgere Dich Nicht";
    container?.appendChild(ue1);

    //Player 1
    const p1 = document.createElement("input");
    p1.setAttribute("type", "text");
    p1.placeholder = "Spieler 1";
    p1.id = "playerOne";
    container?.appendChild(p1);
    //Select Element für Farbauswahl hinzugefügt 
    const colorP1 = document.createElement("select");
    colorP1.id = "colorP1";
    this.colors.forEach(color => {
      const option1 = document.createElement("option");
      option1.value = color;
      option1.textContent = color;
      colorP1.appendChild(option1);
    });
    colorP1.selectedIndex = 0;
    container?.appendChild(colorP1);

  
    //Player 2
    const p2 = document.createElement("input");
    p2.setAttribute("type", "text");
    p2.placeholder = "Spieler 2";
    p2.id = "playerTwo";
    container?.appendChild(p2);
//Select Element für Farbauswahl hinzugefügt 
    const colorP2 = document.createElement("select");
    colorP2.id = "colorP2";
    this.colors.forEach(color => {
      const option2 = document.createElement("option");
      option2.value = color;
      option2.textContent = color;
      colorP2.appendChild(option2);
    });
    colorP2.selectedIndex = 1;
    container?.appendChild(colorP2);

   

//Player3
    const p3 = document.createElement("input");
    p3.setAttribute("type", "text");
    p3.placeholder = "Spieler 3";
    p3.id = "playerThree";
    container?.appendChild(p3); 
//Select Element für Farbauswahl hinzugefügt 
    const colorP3 = document.createElement("select");
    colorP3.id = "colorP3";
    this.colors.forEach(color => {
      const option3 = document.createElement("option");
      option3.value = color;
      option3.textContent = color;
      colorP3.appendChild(option3);
    });
    colorP3.selectedIndex = 2;
    container?.appendChild(colorP3);

    
    //Player 4
    const p4 = document.createElement("input");
    p4.setAttribute("type", "text");
    p4.placeholder = "Spieler 4";
    p4.id = "playerFour";
    container?.appendChild(p4);
//Select Element für Farbauswahl hinzugefügt 
    const colorP4 = document.createElement("select");
    colorP4.id = "colorP4";
    this.colors.forEach(color => {
      const option4 = document.createElement("option");
      option4.value = color;
      option4.textContent = color;
      colorP4.appendChild(option4);
    });
    colorP4.selectedIndex = 3;
    container?.appendChild(colorP4);
  


    /*const startButton = document.createElement("button");
    startButton.textContent = "Start";
    startButton.id = "startButton";
    container?.appendChild(startButton);*/

    // Spielfeldauswahl hinzufügen
    const boardSelection = document.createElement("select");
    boardSelection.id = "boardType";
    ["Standard", "Taktisch", "Chaos"].forEach(optionText => {
      const option = document.createElement("option");
      option.value = optionText;
      option.textContent = optionText;
      boardSelection.appendChild(option);
    });
    container?.appendChild(boardSelection);

    // Sonderregeln hinzufügen
    const ruleNames = ["Schlagzwang", "Friendly Fire", "Philanthrop", "Lone Fighter", "Second Round"];
    ruleNames.forEach(rule => {
      const ruleCheckbox = document.createElement("input");
      ruleCheckbox.type = "checkbox";
      ruleCheckbox.id = rule;
      ruleCheckbox.name = rule;
      container?.appendChild(ruleCheckbox);

      const label = document.createElement("label");
      label.htmlFor = rule;
      label.textContent = rule;
      container?.appendChild(label);
    });


    // Startknopf erstellen
    const startButton = document.createElement("button");
    startButton.textContent = "Start";
    startButton.id = "startButton";
    container?.appendChild(startButton);
  }

  changeScreens() {
    const startScreen = document.getElementById("start");
    const gameScreen = document.getElementById("content");
    startScreen!.style.display = "none";
    gameScreen!.style.display = "flex";
  }
}

export { StartScreen };
