﻿/// <reference path="../managers/asset.ts" />
module objects {
    // submarine Class
    export class Submarine {
        image: createjs.Sprite;
        stage: createjs.Stage;
        game: createjs.Container;
        engineSound: createjs.SoundInstance;
        width: number;
        height: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "submarine");
            this.image.x = 50;
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            game.addChild(this.image);
            
        }


        update() {
            this.image.y = this.stage.mouseY;
        }
        destroy() {
            game.removeChild(this.image);
        }
    }
} 