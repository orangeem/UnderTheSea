/// <reference path="../managers/asset.ts" />
module objects {
    // shark class
    export class Boss {
        image: createjs.Sprite;
        stage: createjs.Stage;
        game: createjs.Container;
        width: number;
        height: number;
        dy: number;
        dx: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "boss");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();
            constants.BOSS_HP = 100;

            game.addChild(this.image);
        }

        update() {
            this.image.y -= this.dy;
            this.image.x -= this.dx;

            //boss moving cotrol
            if (this.image.x < 0 && this.image.y < 0) {
                this.reset();
            } else if (this.image.x > this.stage.canvas.width && this.image.y > this.stage.canvas.height) {
                this.reset();
            } else if (this.image.x < 0) {
                this.pointReset();
                this.dx = this.dx * -1;
            } else if (this.image.x > this.stage.canvas.width) {
                
                this.pointReset();
                this.dx = this.dx * 1;
            } else if (this.image.y < 0) {
                this.pointReset();
                this.dy = this.dy * -1;
            } else if (this.image.y > this.stage.canvas.height) {
                this.pointReset();
                this.dy = this.dy * -1;
            } 

        }

        reset() {
            this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
            this.dx = Math.floor(Math.random() * 13 + 13);
            this.dy = Math.floor(Math.random() * - 9) + Math.floor(Math.random() * 9);
            this.image.x = Math.floor(Math.random() * this.stage.canvas.width);
        }

        pointReset() {
            this.dx = Math.floor(Math.random() * 9 + 9);
            this.dy = Math.floor(Math.random() * -7) + Math.floor(Math.random() * 7);
        }

        destroy() {
            game.removeChild(this.image);
        }
    }

} 