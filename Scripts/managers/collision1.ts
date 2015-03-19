/// <reference path="../objects/shark.ts" />
/// <reference path="../objects/bullet.ts" />
/// <reference path="../objects/octopus.ts" />
/// <reference path="../objects/treasurebox.ts" />
/// <reference path="../objects/submarine.ts" />
/// <reference path="../objects/scoreboard.ts" />

module managers {
    // Collision Manager Class
    export class Collision1 {
        // class variables
        private submarine: objects.Submarine;
        private treasurebox: objects.Treasurebox;
        private sharks = [];
        private octopuses = [];
        private scoreboard: objects.Scoreboard;

        constructor(submarine: objects.Submarine, treasurebox: objects.Treasurebox, sharks, scoreboard: objects.Scoreboard, octopuses) {
            this.submarine = submarine;
            this.treasurebox = treasurebox;
            this.sharks = sharks;
            this.scoreboard = scoreboard;
            this.octopuses = octopuses;
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
                createjs.Sound.play("boo");
                if (this.scoreboard.hp <= 20) {
                    this.scoreboard.lives -= 1;
                    this.scoreboard.hp = 100;
                } else {
                    this.scoreboard.hp -= 20;
                }
                shark.reset();
            }
        }

        // check collision between submarine and any octopus object
        private submarineAndOctopus(octopus: objects.Octopus) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.submarine.image.x;
            p1.y = this.submarine.image.y;
            p2.x = octopus.image.x;
            p2.y = octopus.image.y;
            if (this.distance(p1, p2) < ((this.submarine.height / 2) + (octopus.height / 2))) {
                createjs.Sound.play("twang");
                if (this.scoreboard.hp <= 20) {
                    this.scoreboard.lives -= 1;
                    this.scoreboard.hp = 100
                } else {
                    this.scoreboard.hp -= 20;
                }
                octopus.reset();
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
                createjs.Sound.play("tada");
                this.scoreboard.score += 100;
                this.treasurebox.reset();
            }
        }

        // Utility Function to Check Collisions
        update() {
            for (var count = 0; count < constants.SHARK_NUM; count++) {
                this.submarineAndShark(this.sharks[count]);
            }

            for (var count = 0; count < constants.OCTOPUS_NUM; count++) {
                this.submarineAndOctopus(this.octopuses[count]);
            }

            this.submarineAndTreasurebox();
        }
    }

}  