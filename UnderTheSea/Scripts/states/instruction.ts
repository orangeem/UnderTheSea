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
        var enemy: objects.Label;
        var treasure: objects.Label;
        var img_sub = new createjs.Sprite(managers.Assets.atlas, "submarine");
        var img_shark = new createjs.Sprite(managers.Assets.atlas, "shark");
        var img_octopus = new createjs.Sprite(managers.Assets.atlas, "octopus");
        var img_box = new createjs.Sprite(managers.Assets.atlas, "treasurebox");
        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        ocean = new objects.Ocean(stage, game);
        
        // Show Cursor
        stage.cursor = "default";

        // Display instruction
        howtoplayLabel = new objects.Label(stage.canvas.width / 2, 80, "How to play");
        game.addChild(howtoplayLabel);

        
        enemy = new objects.Label(stage.canvas.width / 2, 170, "Avoid or shot enemy with your submarine");
        game.addChild(enemy);

        treasure = new objects.Label(stage.canvas.width / 2, 270, "Touch treasure box with your submarine\n\nto get score");
        game.addChild(treasure);

       
        img_sub.x = 200;
        img_sub.y = 350;
        game.addChild(img_sub);

        img_shark.x = 300;
        img_shark.y = 350;
        game.addChild(img_shark);

        img_octopus.x = 450;
        img_octopus.y = 350;
        game.addChild(img_octopus);

        img_box.x = 550;
        img_box.y = 350;
        game.addChild(img_box);

        // Display back to menu Button
        backToMenuButton = new objects.Button(stage.canvas.width / 2, 500, "backToMenuButton");
        game.addChild(backToMenuButton);
        backToMenuButton.addEventListener("click", backToMenuClicked);

        stage.addChild(game);
    }

}

 