/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // submarine Class
    var Bullet = (function () {
        function Bullet(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "bubble");
            this.image.x = 50;
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            createjs.Sound.play("shot");
            this.dx = 15;
            game.addChild(this.image);
        }
        Bullet.prototype.update = function () {
            this.image.x += this.dx;
            this.image.y = constants.BULLET_Y;
            if (this.image.x > this.stage.canvas.width + this.width) {
                this.destroy();
                constants.BULLET_FLAG = false;
            }
        };
        Bullet.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Bullet;
    })();
    objects.Bullet = Bullet;
})(objects || (objects = {}));
//# sourceMappingURL=bullet.js.map