/// <reference path="../objects/shark.ts" />
/// <reference path="../objects/treasurebox.ts" />
/// <reference path="../objects/submarine.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/bullet.ts" />
var managers;
(function (managers) {
    // Collision Manager Class
    var Collision = (function () {
        function Collision(submarine, treasurebox, sharks, scoreboard) {
            this.sharks = [];
            this.submarine = submarine;
            this.treasurebox = treasurebox;
            this.sharks = sharks;
            this.scoreboard = scoreboard;
        }
        // Utility method - Distance calculation between two points
        Collision.prototype.distance = function (p1, p2) {
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
        // check collision between submarine and any shark object
        Collision.prototype.submarineAndShark = function (shark) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = this.submarine.image.x;
            p1.y = this.submarine.image.y;
            p2.x = shark.image.x;
            p2.y = shark.image.y;
            if (this.distance(p1, p2) < ((this.submarine.height / 2) + (shark.height / 2))) {
                createjs.Sound.play("boo");
                if (this.scoreboard.hp <= 25) {
                    this.scoreboard.lives -= 1;
                    this.scoreboard.hp = 100;
                }
                else {
                    this.scoreboard.hp -= 25;
                }
                shark.reset();
            }
        };
        // check collision between submarine and treasure box
        Collision.prototype.submarineAndTreasurebox = function () {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = this.submarine.image.x;
            p1.y = this.submarine.image.y;
            p2.x = this.treasurebox.image.x;
            p2.y = this.treasurebox.image.y;
            if (this.distance(p1, p2) < ((this.submarine.height / 2) + (this.treasurebox.height / 2))) {
                createjs.Sound.play("tada");
                this.scoreboard.score += 100;
                this.treasurebox.reset();
            }
        };
        // Utility Function to Check Collisions
        Collision.prototype.update = function () {
            for (var count = 0; count < constants.SHARK_NUM; count++) {
                this.submarineAndShark(this.sharks[count]);
            }
            this.submarineAndTreasurebox();
        };
        return Collision;
    })();
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map