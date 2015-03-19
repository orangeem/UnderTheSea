/// <reference path="../objects/jetsam.ts" />
/// <reference path="../objects/flower.ts" />
/// <reference path="../objects/submarine.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/bullet.ts" />
/// <reference path="../objects/boss.ts" />
module managers {
    // Collision Manager Class
    export class bulletFinal {
        // class variables
        private jetsams = [];
        private scoreboard: objects.Scoreboard;
        private bullet: objects.Bullet;
        private boss: objects.Boss;

        constructor(jetsams, scoreboard: objects.Scoreboard, boss:objects.Boss, bullet: objects.Bullet) {
            this.jetsams = jetsams;
            this.scoreboard = scoreboard;
            this.bullet = bullet;
            this.boss = boss;
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
        private bulletAndJetsam(jetsam: objects.Jetsam) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.bullet.image.x;
            p1.y = this.bullet.image.y;
            p2.x = jetsam.image.x;
            p2.y = jetsam.image.y;

            if (this.distance(p1, p2) < ((this.bullet.height / 2) + (jetsam.height / 2))) {
                createjs.Sound.play("uuu");
                jetsam.reset();
            }
        }

        // check collision between bullet and boss object
        private bulletAndBoss() {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.bullet.image.x;
            p1.y = this.bullet.image.y;
            p2.x = boss.image.x;
            p2.y = boss.image.y;
            if (this.distance(p1, p2) < ((this.bullet.height / 2) + (boss.height / 2))) {
                createjs.Sound.play("aha"); 
                if (constants.BOSS_HP <= 15) {
                    constants.BOSS_HP = 0;
                    boss.destroy();
                } else {
                    constants.BOSS_HP -= 15;
                }
                boss.reset();
            }
        }

        // Utility Function to Check Collisions
        update() {
            for (var count = 0; count < constants.JETSAM_NUM; count++) {
                this.bulletAndJetsam(this.jetsams[count]);
            }
            this.bulletAndBoss();

        }
    }

}    