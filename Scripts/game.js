/// <reference path="constants.ts" />
/// <reference path="managers/asset.ts" />
/// <reference path="objects/shark.ts" />
/// <reference path="objects/jetsam.ts" />
/// <reference path="objects/flower.ts" />
/// <reference path="objects/treasurebox.ts" />
/// <reference path="objects/ocean.ts" />
/// <reference path="objects/bullet.ts" />
/// <reference path="objects/submarine.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="objects/boss.ts" />
/// <reference path="objects/label.ts" />
/// <reference path="objects/button.ts" />
/// <reference path="managers/collision.ts" />
/// <reference path="managers/collision1.ts" />
/// <reference path="managers/bulletCollision.ts" />
/// <reference path="managers/bulletCollision1.ts" />
/// <reference path="managers/finalcollision.ts" />
/// <reference path="managers/bulletFinal.ts" />
/// <reference path="states/play.ts" />
/// <reference path="states/menu.ts" />
/// <reference path="states/gameover.ts" />
/// <reference path="states/bossStage.ts" />
/// <reference path="states/instruction.ts" />
/// <reference path="states/ending.ts" />
var stage;
var game;
var ocean;
var submarine;
var treasurebox;
var flower;
var jetsams = []; //jetsam array;
var bullet;
var boss;
var sharks = []; // sharks array;
var octopuses = []; // octopuses array;
var scoreboard;
var bgmSound;
var collision;
var collision1;
var collision2;
var bulletStage1;
var bulletStage2;
var bulletStage3;
var tryAgain;
var playButton;
var howToPlayButton;
var backToMenuButton;
var currentState;
var currentStateFunction;
// Preload function - Loads Assets and initializes game;
function preload() {
    managers.Assets.init();
    managers.Assets.loader.addEventListener("complete", init);
}
// init called after Assets have been loaded.
function init() {
    stage = new createjs.Stage(document.getElementById("canvas"));
    stage.enableMouseOver(30);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", gameLoop);
    optimizeForMobile();
    currentState = constants.MENU_STATE;
    changeState(currentState);
    bgmSound = createjs.Sound.play("assets/sounds/underthesea.ogg", createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);
}
// Add touch support for mobile devices
function optimizeForMobile() {
    if (createjs.Touch.isSupported()) {
        createjs.Touch.enable(stage);
    }
}
// Game Loop
function gameLoop(event) {
    currentStateFunction();
    stage.update();
}
function changeState(state) {
    switch (state) {
        case constants.MENU_STATE:
            // instantiate menu screen
            currentStateFunction = states.menuState;
            states.menu();
            break;
        case constants.PLAY_STATE:
            // instantiate play screen
            currentStateFunction = states.playState;
            states.play();
            break;
        case constants.GAME_OVER_STATE:
            currentStateFunction = states.gameOverState;
            // instantiate game over screen
            states.gameOver();
            break;
        case constants.GAME_INSTRUCTION_STATE:
            currentStateFunction = states.instructionState;
            // instantiate instruction screen
            states.instruction();
            break;
        case constants.PLAY_STATE2:
            currentStateFunction = states.playState2;
            // instantiate stage2 screen
            states.play1();
            break;
        case constants.PLAY_BOSS:
            currentStateFunction = states.playState3;
            // instantiate final screen
            states.playBoss();
            break;
        case constants.ENDING:
            currentStateFunction = states.ending;
            // instantiate game ending screen
            states.gameEnding();
            break;
    }
}
//# sourceMappingURL=game.js.map