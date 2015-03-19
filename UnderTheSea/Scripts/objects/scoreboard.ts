module objects {
    // Scoreboard Class
    export class Scoreboard {
        stage: createjs.Stage;
        game: createjs.Container;
        lives: number;
        hp: number;
        sub_hp = new createjs.Shape();
        score: number;
        label: createjs.Text;
        hplabel: createjs.Text;
        labelText: string = "";
        width: number;
        height: number;
        boss_hp: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;

            if (currentState == constants.PLAY_STATE) {

                this.lives = constants.SUBMARINE_LIVES;
                this.score = 0;
                this.hp = constants.SUBMARINE_HP;
            } else if (currentState == constants.PLAY_STATE2 || currentState == constants.PLAY_BOSS) {
                this.lives = constants.SCORE_LIVES;
                this.score = constants.SCORE_SCORE;
                this.hp = constants.SCORE_HP;
            } 
            this.label = new createjs.Text(this.labelText, constants.LABEL_FONT, "#86E57F");
            this.label.textAlign = "right";
            this.label.x = 900;
            this.label.y = 550;
            this.hplabel = new createjs.Text(" HP : ", constants.LABEL_FONT, "#86E57F");
            this.hplabel.x = 0;
            this.hplabel.y = 550
            this.update();
            this.width = this.label.getBounds().width;
            this.height = this.label.getBounds().height;
            this.sub_hp.x = 93;
            this.sub_hp.y = 563;
            this.sub_hp.graphics.beginFill("#ff0000").drawRect(0,0,100,27);
            game.addChild(this.label);
            game.addChild(this.hplabel);
            game.addChild(this.sub_hp);
        }

        update() {
            
            this.stateHP(this.hp);    
            this.labelText = "Lives: " + this.lives.toString() + "   Score: " + this.score.toString()+" ";
            this.label.text = this.labelText;
            
        }

        //HP control
        stateHP(hp: number) {
            game.removeChild(this.sub_hp);
            this.sub_hp = new createjs.Shape();
            this.sub_hp.x = 93;
            this.sub_hp.y = 563;
            this.sub_hp.graphics.beginFill("#ff0000").drawRect(0, 0, this.hp, 27);
            game.addChild(this.sub_hp)
        }        

        destroy() {
            game.removeChild(this.label);
        }
    }
} 
