/// <reference path="../objects/flower.ts" />
/// <reference path="../objects/bullet.ts" />
/// <reference path="../objects/boss.ts" />
/// <reference path="../objects/jetsam.ts" />
/// <reference path="../objects/submarine.ts" />
/// <reference path="../objects/scoreboard.ts" />
var managers;
(function (managers) {
    // Collision Manager Class
    var finalcollision = (function () {
        function finalcollision(submarine, flower, jetsams, scoreboard, boss) {
            this.jetsams = [];
            this.submarine = submarine;
            this.flower = flower;
            this.jetsams = jetsams;
            this.boss = boss;
            this.scoreboard = scoreboard;
        }
        // Utility method - Distance calculation between two points
        finalcollision.prototype.distance = function (p1, p2) {
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
        // check collision between submarine and any jetsam object
        finalcollision.prototype.submarineAndJetsam = function (jetsam) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = this.submarine.image.x;
            p1.y = this.submarine.image.y;
            p2.x = jetsam.image.x;
            p2.y = jetsam.image.y;
            if (this.distance(p1, p2) < ((this.submarine.height / 2) + (jetsam.height / 2))) {
                createjs.Sound.play("boo");
                if (this.scoreboard.hp <= 10) {
                    this.scoreboard.lives -= 1;
                    this.scoreboard.hp = 100;
                }
                else {
                    this.scoreboard.hp -= 10;
                }
                jetsam.reset();
            }
        };
        // check collision between submarine and boss object
        finalcollision.prototype.submarineAndBoss = function () {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = this.submarine.image.x;
            p1.y = this.submarine.image.y;
            p2.x = boss.image.x;
            p2.y = boss.image.y;
            if (this.distance(p1, p2) < ((this.submarine.height / 2) + (boss.height / 2))) {
                createjs.Sound.play("twang");
                if (this.scoreboard.hp <= 20) {
                    this.scoreboard.lives -= 1;
                    this.scoreboard.hp = 100;
                }
                else {
                    this.scoreboard.hp -= 20;
                }
                boss.reset();
            }
        };
        // check collision between submarine and flower
        finalcollision.prototype.submarineAndFlower = function () {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = this.submarine.image.x;
            p1.y = this.submarine.image.y;
            p2.x = this.flower.image.x;
            p2.y = this.flower.image.y;
            if (this.distance(p1, p2) < ((this.submarine.height / 2) + (this.flower.height / 2))) {
                createjs.Sound.play("yam");
                if (this.scoreboard.hp >= 85) {
                    this.scoreboard.hp = 100;
                }
                else {
                    this.scoreboard.hp += 15;
                }
                this.scoreboard.score += 20;
                this.flower.reset();
            }
        };
        // Utility Function to Check Collisions
        finalcollision.prototype.update = function () {
            for (var count = 0; count < constants.JETSAM_NUM; count++) {
                this.submarineAndJetsam(this.jetsams[count]);
            }
            this.submarineAndFlower();
            this.submarineAndBoss();
        };
        return finalcollision;
    })();
    managers.finalcollision = finalcollision;
})(managers || (managers = {}));
//# sourceMappingURL=finalcollision.js.map