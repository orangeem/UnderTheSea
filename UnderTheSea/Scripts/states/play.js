/// <reference path="../objects/button.ts" />
/// <reference path="../objects/shark.ts" />
/// <reference path="../objects/treasurebox.ts" />
/// <reference path="../objects/bullet.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/submarine.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../managers/collision.ts" />
/// <reference path="../managers/bulletCollision.ts" />
/// <reference path="../managers/bulletCollision1.ts" />
var states;
(function (states) {
    var count = 0;
    function playState() {
        ocean.update();
        treasurebox.update();
        submarine.update();
        //bullet update and collision update
        if (constants.BULLET_FLAG == true) {
            bullet.update();
            bulletStage1.update();
        }
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
        if (scoreboard.score >= 1000) {
            constants.SCORE_HP = scoreboard.hp;
            constants.SCORE_LIVES = scoreboard.lives;
            constants.SCORE_SCORE = scoreboard.score;
            stage.removeChild(game);
            submarine.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            stage.removeAllEventListeners();
            currentState = constants.PLAY_STATE2;
            changeState(currentState);
        }
    }
    states.playState = playState;
    //bullet mouse event
    function shotBullet(event) {
        if (constants.BULLET_FLAG == false) {
            constants.BULLET_Y = stage.mouseY;
            bullet = new objects.Bullet(stage, game);
            bulletStage1 = new managers.bulletCollision(sharks, scoreboard, bullet);
            constants.BULLET_FLAG = true;
            console.log(constants.BULLET_FLAG);
        }
    }
    states.shotBullet = shotBullet;
    // play state Function
    function play() {
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
        ////shot bullet
        stage.addEventListener("click", shotBullet);
        // Display Scoreboard
        scoreboard = new objects.Scoreboard(stage, game);
        // Instantiate Collision Manager
        collision = new managers.Collision(submarine, treasurebox, sharks, scoreboard);
        stage.addChild(game);
    }
    states.play = play;
})(states || (states = {}));
//# sourceMappingURL=play.js.map