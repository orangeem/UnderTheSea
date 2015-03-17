﻿/// <reference path="../objects/shark.ts" />
/// <reference path="../objects/treasurebox.ts" />
/// <reference path="../objects/submarine.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/bullet.ts" />
module managers {
    // Collision Manager Class
    export class bulletCollision {
        // class variables
        private sharks = [];
        private scoreboard: objects.Scoreboard;
        private bullet: objects.Bullet;

        constructor(sharks, scoreboard: objects.Scoreboard, bullet: objects.Bullet) {
            this.sharks = sharks;
            this.scoreboard = scoreboard;
            this.bullet = bullet;
        }

        // Utility method - Distance calculation between two points
        private distance(p1: createjs.Point, p2: createjs.Point): number {
            var result: number = 0;
            var xPoints: number = 0;
            var yPoints: number = 0;

            xPoints = p2.x - p1.x;
            xPoints = xPoints * xPoints;

            yPoints = p2.y - p1.y;
            yPoints = yPoints * yPoints;

            result = Math.sqrt(xPoints + yPoints);

            return result;
        }

        // check collision between bullet and any shark object
        private bulletAndShark(shark: objects.Shark) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.bullet.image.x;
            p1.y = this.bullet.image.y;
            p2.x = shark.image.x;
            p2.y = shark.image.y;

            if (this.distance(p1, p2) < ((this.bullet.height / 2) + (shark.height / 2))) {
                createjs.Sound.play("thunder");
                shark.reset();
            }
        }

        // Utility Function to Check Collisions
        update() {
            for (var count = 0; count < constants.SHARK_NUM; count++) {
                this.bulletAndShark(this.sharks[count]);
            }
        
        }
    }

}  