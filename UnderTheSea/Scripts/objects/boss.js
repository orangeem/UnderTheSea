/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // shark class
    var Boss = (function () {
        function Boss(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "boss");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();
            constants.BOSS_HP = 100;
            game.addChild(this.image);
        }
        Boss.prototype.update = function () {
            this.image.y -= this.dy;
            this.image.x -= this.dx;
            //boss moving cotrol
            if (this.image.x < 0 && this.image.y < 0) {
                this.reset();
            }
            else if (this.image.x > this.stage.canvas.width && this.image.y > this.stage.canvas.height) {
                this.reset();
            }
            else if (this.image.x < 0) {
                this.pointReset();
                this.dx = this.dx * -1;
            }
            else if (this.image.x > this.stage.canvas.width) {
                this.pointReset();
                this.dx = this.dx * 1;
            }
            else if (this.image.y < 0) {
                this.pointReset();
                this.dy = this.dy * -1;
            }
            else if (this.image.y > this.stage.canvas.height) {
                this.pointReset();
                this.dy = this.dy * -1;
            }
        };
        Boss.prototype.reset = function () {
            this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
            this.dx = Math.floor(Math.random() * 13 + 13);
            this.dy = Math.floor(Math.random() * -9) + Math.floor(Math.random() * 9);
            this.image.x = Math.floor(Math.random() * this.stage.canvas.width);
        };
        Boss.prototype.pointReset = function () {
            this.dx = Math.floor(Math.random() * 9 + 9);
            this.dy = Math.floor(Math.random() * -7) + Math.floor(Math.random() * 7);
        };
        Boss.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Boss;
    })();
    objects.Boss = Boss;
})(objects || (objects = {}));
//# sourceMappingURL=boss.js.map