/// <reference path="../managers/asset.ts" />
module objects {
    // submarine Class
    export class Bullet {
        image: createjs.Sprite;
        stage: createjs.Stage;
        game: createjs.Container;
        engineSound: createjs.SoundInstance;
        width: number;
        height: number;
        dx: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "bubble");
            this.image.x = 50;
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            //this.engineSound = createjs.Sound.play('shot', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);
            createjs.Sound.play("shot");
            this.dx = 15;
            //constants.BULLET_FLAG = true;

            game.addChild(this.image);
        }


        update() {
            this.image.x += this.dx;
            this.image.y = constants.BULLET_Y;

            if (this.image.x > this.stage.canvas.width + this.width) {
                this.destroy();
                constants.BULLET_FLAG = false;
            }
        }

        destroy() {
            //this.engineSound.stop();
            game.removeChild(this.image);
        }
    }
}  