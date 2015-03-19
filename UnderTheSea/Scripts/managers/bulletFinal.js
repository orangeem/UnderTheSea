/// <reference path="../objects/jetsam.ts" />
/// <reference path="../objects/flower.ts" />
/// <reference path="../objects/submarine.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/bullet.ts" />
/// <reference path="../objects/boss.ts" />
var managers;
(function (managers) {
    // Collision Manager Class
    var bulletFinal = (function () {
        function bulletFinal(jetsams, scoreboard, boss, bullet) {
            // class variables
            this.jetsams = [];
            this.jetsams = jetsams;
            this.scoreboard = scoreboard;
            this.bullet = bullet;
            this.boss = boss;
        }
        // Utility method - Distance calculation between two points
        bulletFinal.prototype.distance = function (p1, p2) {
            var result = 0;
            var xPoints = 0;
            var yPoints = 0;
            xPoints = p2.x - p1.x;
            xPoints = xPoints * xPoints;
            yPoints = p2.y - p1.y;
            yPoints = yPoints * yPoints;
            result = Math.sqrt(xPoints + yPoints);
            return result;
        };
        // check collision between bullet and any shark object
        bulletFinal.prototype.bulletAndJetsam = function (jetsam) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = this.bullet.image.x;
            p1.y = this.bullet.image.y;
            p2.x = jetsam.image.x;
            p2.y = jetsam.image.y;
            if (this.distance(p1, p2) < ((this.bullet.height / 2) + (jetsam.height / 2))) {
                createjs.Sound.play("uuu");
                jetsam.reset();
            }
        };
        // check collision between bullet and boss object
        bulletFinal.prototype.bulletAndBoss = function () {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = this.bullet.image.x;
            p1.y = this.bullet.image.y;
            p2.x = boss.image.x;
            p2.y = boss.image.y;
            if (this.distance(p1, p2) < ((this.bullet.height / 2) + (boss.height / 2))) {
                createjs.Sound.play("aha");
                if (constants.BOSS_HP <= 15) {
                    constants.BOSS_HP = 0;
                    boss.destroy();
                }
                else {
                    constants.BOSS_HP -= 15;
                }
                boss.reset();
            }
        };
        // Utility Function to Check Collisions
        bulletFinal.prototype.update = function () {
            for (var count = 0; count < constants.JETSAM_NUM; count++) {
                this.bulletAndJetsam(this.jetsams[count]);
            }
            this.bulletAndBoss();
        };
        return bulletFinal;
    })();
    managers.bulletFinal = bulletFinal;
})(managers || (managers = {}));
//# sourceMappingURL=bulletFinal.js.map