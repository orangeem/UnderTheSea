/// <reference path="../objects/button.ts" />
/// <reference path="../objects/shark.ts" />
/// <reference path="../objects/treasurebox.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/submarine.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../managers/collision.ts" />
module states {
    export function playState() {
        ocean.update();
        treasurebox.update();
        submarine.update();

        for (var count = 0; count < constants.SHARK_NUM; count++) {
            sharks[count].update();
        }

        collision.update();
        scoreboard.update();

        if (scoreboard.lives <= 0) {
            stage.removeChild(game);
            submarine.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }
    }

    // play state Function
    export function play(): void {
        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        ocean = new objects.Ocean(stage, game);
        treasurebox = new objects.Treasurebox(stage, game);
        submarine = new objects.Submarine(stage, game);

        // Show Cursor
        stage.cursor = "none";

        // Create multiple sharks
        for (var count = 0; count < constants.SHARK_NUM; count++) {
            sharks[count] = new objects.Shark(stage, game);
        }

        // Display Scoreboard
        scoreboard = new objects.Scoreboard(stage, game);

        // Instantiate Collision Manager
        collision = new managers.Collision(submarine, treasurebox, sharks, scoreboard);

        stage.addChild(game);
    }
}