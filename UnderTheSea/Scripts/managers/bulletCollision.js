/// <reference path="../objects/shark.ts" />
/// <reference path="../objects/treasurebox.ts" />
/// <reference path="../objects/submarine.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/bullet.ts" />
var managers;
(function (managers) {
    // Collision Manager Class
    var bulletCollision = (function () {
        function bulletCollision(sharks, scoreboard, bullet) {
            // class variables
            this.sharks = [];
            this.sharks = sharks;
            this.scoreboard = scoreboard;
            this.bullet = bullet;
        }
        // Utility method - Distance calculation between two points
        bulletCollision.prototype.distance = function (p1, p2) {
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
        bulletCollision.prototype.bulletAndShark = function (shark) {
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
        // Utility Function to Check Collisions
        bulletCollision.prototype.update = function () {
            for (var count = 0; count < constants.SHARK_NUM; count++) {
                this.bulletAndShark(this.sharks[count]);
            }
        };
        return bulletCollision;
    })();
    managers.bulletCollision = bulletCollision;
})(managers || (managers = {}));
//# sourceMappingURL=bulletCollision.js.map