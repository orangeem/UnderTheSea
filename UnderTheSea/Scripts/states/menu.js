/// <reference path="../constants.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/submarine.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/treasurebox.ts" />
/// <reference path="../objects/shark.ts" />
/// <reference path="../objects/boss.ts" />
/// <reference path="../objects/octopus.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
var states;
(function (states) {
    function playButtonClicked(event) {
        stage.removeChild(game);
        submarine.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
    }
    states.playButtonClicked = playButtonClicked;
    function instructionButtonClicked(event) {
        stage.removeChild(game);
        submarine.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.GAME_INSTRUCTION_STATE;
        changeState(currentState);
    }
    states.instructionButtonClicked = instructionButtonClicked;
    function menuState() {
        ocean.update();
        submarine.update();
    }
    states.menuState = menuState;
    function menu() {
        var gameNameLabel;
        // Declare new Game Container
        game = new createjs.Container();
        // Instantiate Game Objects
        ocean = new objects.Ocean(stage, game);
        submarine = new objects.Submarine(stage, game);
        // Show Cursor
        stage.cursor = "default";
        // Display Game Over
        gameNameLabel = new objects.Label(stage.canvas.width / 2, 40, "Under the SEA");
        game.addChild(gameNameLabel);
        // Display Play Again Button
        playButton = new objects.Button(stage.canvas.width / 2, 250, "playButton");
        game.addChild(playButton);
        playButton.addEventListener("click", playButtonClicked);
        // Display instruction button
        howToPlayButton = new objects.Button(stage.canvas.width / 2, 350, "instructionsButton");
        game.addChild(howToPlayButton);
        howToPlayButton.addEventListener("click", instructionButtonClicked);
        stage.addChild(game);
    }
    states.menu = menu;
})(states || (states = {}));
//# sourceMappingURL=menu.js.map