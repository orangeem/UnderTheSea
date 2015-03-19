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
module states {

    var count: number=0;
    
    export function playState() {
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
        
        
        if (scoreboard.lives <= 0 && constants.BULLET_FLAG == false) {
            stage.removeChild(game);
            submarine.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }

        //save score for next stage
        if (scoreboard.score >= 100 && constants.BULLET_FLAG == false) {
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

    //bullet mouse event
    export function shotBullet(event: MouseEvent) {
        
         
       if (constants.BULLET_FLAG == false) {
            
            constants.BULLET_Y = stage.mouseY;               
            bullet = new objects.Bullet(stage, game);
            bulletStage1 = new managers.bulletCollision(sharks, scoreboard, bullet);

            constants.BULLET_FLAG = true;  
                
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

        //shot bullet
        stage.addEventListener("click", shotBullet);
        
        // Display Scoreboard
        scoreboard = new objects.Scoreboard(stage, game);

        // Instantiate Collision Manager
        collision = new managers.Collision(submarine, treasurebox, sharks, scoreboard);

        stage.addChild(game);
    }
}