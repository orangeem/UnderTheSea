/// <reference path="../objects/shark.ts" />
/// <reference path="../objects/treasurebox.ts" />
/// <reference path="../objects/submarine.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/bullet.ts" />
module managers {
    // Collision Manager Class
    export class Collision {
        // class variables
        private submarine: objects.Submarine;
        private treasurebox: objects.Treasurebox;
        private sharks = [];
        private scoreboard: objects.Scoreboard;
        
        constructor(submarine: objects.Submarine, treasurebox: objects.Treasurebox, sharks, scoreboard: objects.Scoreboard) {
            this.submarine = submarine;
            this.treasurebox = treasurebox;
            this.sharks = sharks;
            this.scoreboard = scoreboard;            
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

        // check collision between submarine and any shark object
        private submarineAndShark(shark: objects.Shark) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.submarine.image.x;
            p1.y = this.submarine.image.y;
            p2.x = shark.image.x;
            p2.y = shark.image.y;
            if (this.distance(p1, p2) < ((this.submarine.height / 2) + (shark.height / 2))) {
                createjs.Sound.play("thunder");
                if (this.scoreboard.hp <= 25) {                    
                    this.scoreboard.lives -= 1;
                    this.scoreboard.hp = 100;
                } else {
                    this.scoreboard.hp -= 25;
                }
                shark.reset();
            }
        }

        // check collision between submarine and treasure box
        private submarineAndTreasurebox() {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.submarine.image.x;
            p1.y = this.submarine.image.y;
            p2.x = this.treasurebox.image.x;
            p2.y = this.treasurebox.image.y;
            if (this.distance(p1, p2) < ((this.submarine.height / 2) + (this.treasurebox.height / 2))) {
                createjs.Sound.play("yay");
                this.scoreboard.score += 100;
                this.treasurebox.reset();
            }
        }
                
        // Utility Function to Check Collisions
        update() {
            for (var count = 0; count < constants.SHARK_NUM; count++) {
                this.submarineAndShark(this.sharks[count]);                
            }
            this.submarineAndTreasurebox();
        }
    }

} 