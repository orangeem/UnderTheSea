/// <reference path="../constants.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/shark.ts" />
/// <reference path="../objects/treasurebox.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/submarine.ts" />
/// <reference path="../objects/scoreboard.ts" />
var states;
(function (states) {
    function ending() {
        ocean.update();
    }
    states.ending = ending;
    // Restart Game when Try Again Button is clicked
    function tryAgainClicked1(event) {
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
    }
    states.tryAgainClicked1 = tryAgainClicked1;
    // back to menu when backToMenu Button is clicked
    function backToMenuClicked2(event) {
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.MENU_STATE;
        changeState(currentState);
    }
    states.backToMenuClicked2 = backToMenuClicked2;
    // Game Over Scene
    function gameEnding() {
        var gameOverLabel;
        var finalScoreLabel;
        var finalScore;
        var endingTxt;
        // Declare new Game Container
        game = new createjs.Container();
        // Instantiate Game Objects
        ocean = new objects.Ocean(stage, game);
        // Show Cursor
        stage.cursor = "default";
        // Display Game Over
        gameOverLabel = new objects.Label(stage.canvas.width / 2, 40, "Happy Ending");
        game.addChild(gameOverLabel);
        endingTxt = new createjs.Text("Finally, you save mermaid!!", "30px Arial", "#86E57F");
        endingTxt.textAlign = "center";
        endingTxt.x = stage.canvas.width / 2;
        endingTxt.y = 140;
        game.addChild(endingTxt);
        // Display Final Score Label
        finalScoreLabel = new objects.Label(stage.canvas.width / 2, 220, "FINAL SCORE");
        game.addChild(finalScoreLabel);
        // Display Final Score
        finalScore = new objects.Label(stage.canvas.width / 2, 285, scoreboard.score.toString());
        game.addChild(finalScore);
        // Display Try Again Button
        tryAgain = new objects.Button(stage.canvas.width / 2, 350, "tryAgainButton");
        game.addChild(tryAgain);
        tryAgain.addEventListener("click", tryAgainClicked1);
        // Display back to menu button
        backToMenuButton = new objects.Button(stage.canvas.width / 2, 450, "backToMenuButton");
        game.addChild(backToMenuButton);
        backToMenuButton.addEventListener("click", backToMenuClicked2);
        stage.addChild(game);
    }
    states.gameEnding = gameEnding;
})(states || (states = {}));
//# sourceMappingURL=ending.js.map