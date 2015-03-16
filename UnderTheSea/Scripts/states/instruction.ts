/// <reference path="../constants.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/submarine.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/treasurebox.ts" />
/// <reference path="../objects/shark.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
module states {
    export function instructionState() {
        ocean.update();
    }

    // back to menu when backToMenu Button is clicked
    export function backToMenuClicked(event: MouseEvent) {
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.MENU_STATE;
        changeState(currentState);
    }

    export function instruction() {

        var howtoplayLabel: objects.Label;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        ocean = new objects.Ocean(stage, game);
        
        // Show Cursor
        stage.cursor = "default";

        // Display instruction
        howtoplayLabel = new objects.Label(stage.canvas.width / 2, 40, "How to play");
        game.addChild(howtoplayLabel);

        // Display back to menu Button
        backToMenuButton = new objects.Button(stage.canvas.width / 2, 250, "backToMenuButton");
        game.addChild(backToMenuButton);
        backToMenuButton.addEventListener("click", backToMenuClicked);

        stage.addChild(game);
    }

}

 