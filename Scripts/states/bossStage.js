/// <reference path="../objects/button.ts" />
/// <reference path="../objects/bullet.ts" />
/// <reference path="../objects/flower.ts" />
/// <reference path="../objects/jetsam.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/submarine.ts" />
/// <reference path="../objects/boss.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../managers/finalcollision.ts" />
/// <reference path="../managers/bulletFinal.ts" />
var states;
(function (states) {
    function playState3() {
        ocean.update();
        flower.update();
        submarine.update();
        //bullet update and collision update
        if (constants.BULLET_FLAG == true) {
            bullet.update();
            bulletStage3.update();
        }
        for (var count = 0; count < constants.JETSAM_NUM; count++) {
            jetsams[count].update();
        }
        collision2.update();
        boss.update();
        scoreboard.update();
        if (scoreboard.lives <= 0 && constants.BULLET_FLAG == false) {
            stage.removeChild(game);
            submarine.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }
        //Save score for final screen
        if (constants.BOSS_HP <= 0 && constants.BULLET_FLAG == false) {
            constants.SCORE_HP = scoreboard.hp;
            constants.SCORE_LIVES = scoreboard.lives;
            constants.SCORE_SCORE = scoreboard.score;
            stage.removeChild(game);
            submarine.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            stage.removeAllEventListeners();
            currentState = constants.ENDING;
            changeState(currentState);
        }
    }
    states.playState3 = playState3;
    //bullet mouse event
    function shotBullet3(event) {
        if (constants.BULLET_FLAG == false) {
            constants.BULLET_Y = stage.mouseY;
            bullet = new objects.Bullet(stage, game);
            bulletStage3 = new managers.bulletFinal(jetsams, scoreboard, boss, bullet);
            constants.BULLET_FLAG = true;
        }
    }
    states.shotBullet3 = shotBullet3;
    // play state Function
    function playBoss() {
        // Declare new Game Container
        game = new createjs.Container();
        // Instantiate Game Objects
        ocean = new objects.Ocean(stage, game);
        submarine = new objects.Submarine(stage, game);
        boss = new objects.Boss(stage, game);
        flower = new objects.Flower(stage, game);
        // Show Cursor
        stage.cursor = "none";
        for (var count = 0; count < constants.JETSAM_NUM; count++) {
            jetsams[count] = new objects.Jetsam(stage, game);
        }
        //shot bullet
        stage.addEventListener("click", shotBullet3);
        // Display Scoreboard
        scoreboard = new objects.Scoreboard(stage, game);
        // Instantiate Collision Manager
        collision2 = new managers.finalcollision(submarine, flower, jetsams, scoreboard, boss);
        stage.addChild(game);
    }
    states.playBoss = playBoss;
})(states || (states = {}));
//# sourceMappingURL=bossStage.js.map