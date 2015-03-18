module objects {
    // Scoreboard Class
    export class Scoreboard {
        stage: createjs.Stage;
        game: createjs.Container;
        lives: number;
        hp: number;
        hp1 = new createjs.Shape();
        score: number;
        label: createjs.Text;
        labelText: string = "";
        width: number;
        height: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;

            if (currentState == constants.PLAY_STATE) {

                this.lives = constants.SUBMARINE_LIVES;
                this.score = 0;
                this.hp = constants.SUBMARINE_HP;
            } else if (currentState == constants.PLAY_STATE2) {
                this.lives = constants.SCORE_LIVES;
                this.score = constants.SCORE_SCORE;
                this.hp = constants.SCORE_HP;
            }
            this.label = new createjs.Text(this.labelText, constants.LABEL_FONT, constants.LABEL_COLOUR);
            this.label.x = 433;
            this.label.y = 564;
            this.update();
            this.width = this.label.getBounds().width;
            this.height = this.label.getBounds().height;
            this.hp1.x = 611;
            this.hp1.y = 570;
            this.hp1.graphics.beginFill("#ff0000").drawRect(0,0,100,25);
            game.addChild(this.label);
            game.addChild(this.hp1);
        }

        update() {
            console.log(this.hp.toString());
            this.stateHP(this.hp);    
            this.labelText = "Lives: " + this.lives.toString() + "   HP              Score: " + this.score.toString();
            
            this.label.text = this.labelText;

        }

        stateHP(hp: number) {
            game.removeChild(this.hp1);
            this.hp1 = new createjs.Shape();
            this.hp1.x = 611;
            this.hp1.y = 570;
            this.hp1.graphics.beginFill("#ff0000").drawRect(0, 0, this.hp, 25);
            game.addChild(this.hp1)
        }

        

        destroy() {
            game.removeChild(this.label);
        }
    }
} 
