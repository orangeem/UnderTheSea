/// <reference path="../objects/shark.ts" />
/// <reference path="../objects/treasurebox.ts" />
/// <reference path="../objects/submarine.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/bullet.ts" />
/// <reference path="../objects/octopus.ts" />
var managers;
(function (managers) {
    // Collision Manager Class
    var bulletCollision1 = (function () {
        function bulletCollision1(sharks, scoreboard, octopuses, bullet) {
            // class variables
            this.sharks = [];
            this.octopuses = [];
            this.sharks = sharks;
            this.scoreboard = scoreboard;
            this.bullet = bullet;
            this.octopuses = octopuses;
        }
        // Utility method - Distance calculation between two points
        bulletCollision1.prototype.distance = function (p1, p2) {
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
        bulletCollision1.prototype.bulletAndShark = function (shark) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = this.bullet.image.x;
            p1.y = this.bullet.image.y;
            p2.x = shark.image.x;
            p2.y = shark.image.y;
            if (this.distance(p1, p2) < ((this.bullet.height / 2) + (shark.height / 2))) {
                createjs.Sound.play("uhoh");
                shark.reset();
            }
        };
        // check collision between bullet and any octopus object
        bulletCollision1.prototype.bulletAndOctopus = function (octopus) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = this.bullet.image.x;
            p1.y = this.bullet.image.y;
            p2.x = octopus.image.x;
            p2.y = octopus.image.y;
            if (this.distance(p1, p2) < ((this.bullet.height / 2) + (octopus.height / 2))) {
                createjs.Sound.play("uhoh");
                octopus.reset();
            }
        };
        // Utility Function to Check Collisions
        bulletCollision1.prototype.update = function () {
            for (var count = 0; count < constants.SHARK_NUM; count++) {
                this.bulletAndShark(this.sharks[count]);
            }
            for (var count = 0; count < constants.OCTOPUS_NUM; count++) {
                this.bulletAndOctopus(this.octopuses[count]);
            }
        };
        return bulletCollision1;
    })();
    managers.bulletCollision1 = bulletCollision1;
})(managers || (managers = {}));
//# sourceMappingURL=bulletCollision1.js.map