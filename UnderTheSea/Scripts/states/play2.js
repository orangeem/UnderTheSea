/// <reference path="../objects/button.ts" />
/// <reference path="../objects/shark.ts" />
/// <reference path="../objects/bullet.ts" />
/// <reference path="../objects/octopus.ts" />
/// <reference path="../objects/treasurebox.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/submarine.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../managers/collision1.ts" />
/// <reference path="../managers/bulletcollision1.ts" />
var states;
(function (states) {
    function playState2() {
        ocean.update();
        treasurebox.update();
        submarine.update();
        //bullet update and collision update
        if (constants.BULLET_FLAG == true) {
            bullet.update();
            bulletStage2.update();
        }
        for (var count = 0; count < constants.SHARK_NUM; count++) {
            sharks[count].update();
        }
        for (var count = 0; count < constants.OCTOPUS_NUM; count++) {
            octopuses[count].update();
        }
        collision1.update();
        scoreboard.update();
        if (scoreboard.lives <= 0 && constants.BULLET_FLAG == false) {
            stage.removeChild(game);
            submarine.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            stage.removeAllEventListeners();
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }
        //save score for next stage.
        if (scoreboard.score >= 200 && constants.BULLET_FLAG == false) {
            constants.SCORE_HP = scoreboard.hp;
            constants.SCORE_LIVES = scoreboard.lives;
            constants.SCORE_SCORE = scoreboard.score;
            stage.removeChild(game);
            submarine.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            stage.removeAllEventListeners();
            currentState = constants.PLAY_BOSS;
            changeState(currentState);
        }
    }
    states.playState2 = playState2;
    //bullet mouse event
    function shotBullet2(event) {
        if (constants.BULLET_FLAG == false) {
            constants.BULLET_Y = stage.mouseY;
            bullet = new objects.Bullet(stage, game);
            bulletStage2 = new managers.bulletCollision1(sharks, scoreboard, octopuses, bullet);
            constants.BULLET_FLAG = true;
        }
    }
    states.shotBullet2 = shotBullet2;
    // play state Function
    function play1() {
        // Declare new Game Container
        game = new createjs.Container();
        // Instantiate Game Objects
        ocean = new objects.Ocean(stage, game);
        treasurebox = new objects.Treasurebox(stage, game);
        submarine = new objects.Submarine(stage, game);
        // Show Cursor
        stage.cursor = "none";
        for (var count = 0; count < constants.SHARK_NUM; count++) {
            sharks[count] = new objects.Shark(stage, game);
        }
        for (var count = 0; count < constants.OCTOPUS_NUM; count++) {
            octopuses[count] = new objects.Octopus(stage, game);
        }
        //shot bullet
        stage.addEventListener("click", shotBullet2);
        // Display Scoreboard
        scoreboard = new objects.Scoreboard(stage, game);
        // Instantiate Collision Manager
        collision1 = new managers.Collision1(submarine, treasurebox, sharks, scoreboard, octopuses);
        stage.addChild(game);
    }
    states.play1 = play1;
})(states || (states = {}));
//# sourceMappingURL=play2.js.map