/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // shark class
    var Shark = (function () {
        function Shark(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "shark");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();
            game.addChild(this.image);
        }
        Shark.prototype.update = function () {
            this.image.y += this.dy;
            this.image.x -= this.dx;
            if (this.image.x < 0) {
                this.reset();
            }
        };
        Shark.prototype.reset = function () {
            this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
            this.dx = Math.floor(Math.random() * 5 + 5);
            this.dy = Math.floor(Math.random() * -3) + Math.floor(Math.random() * 3);
            this.image.x = this.stage.canvas.width;
        };
        Shark.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Shark;
    })();
    objects.Shark = Shark;
})(objects || (objects = {}));
//# sourceMappingURL=shark.js.map