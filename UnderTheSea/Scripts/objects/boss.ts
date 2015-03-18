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
            this.image = new createjs.Sprite(managers.Assets.atlas, "shark");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();

            game.addChild(this.image);
        }

        update() {
            this.image.y -= this.dy;
            this.image.x -= this.dx;

            if (this.image.x < 0) {
                this.reset();
            } else if (this.image.x > this.stage.canvas.width) {
                this.pointReset();
                this.image.x = this.dx * -1;
            } 

            if (this.image.y < 0) {
                this.reset();
            } else if (this.image.y > this.stage.canvas.height) {
                this.pointReset();
                this.image.y = this.dy * -1;
            }

            

        }

        reset() {
            this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
            this.dx = Math.floor(Math.random() * 5 + 5);
            this.dy = Math.floor(Math.random() * -3) + Math.floor(Math.random() * 3);
            this.image.x = Math.floor(Math.random() * this.stage.canvas.width);
        }

        pointReset() {
            this.dx = Math.floor(Math.random() * 5 + 5);
            this.dy = Math.floor(Math.random() * -3) + Math.floor(Math.random() * 3);
        }

        destroy() {
            game.removeChild(this.image);
        }
    }

} 