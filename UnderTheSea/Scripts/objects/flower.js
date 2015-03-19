/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // treasurebox Class
    var Flower = (function () {
        function Flower(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "flower");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();
            this.dx = 6;
            game.addChild(this.image);
        }
        Flower.prototype.update = function () {
            this.image.x -= this.dx;
            if (this.image.x < 0) {
                this.reset();
            }
        };
        Flower.prototype.reset = function () {
            this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
            this.image.x = this.stage.canvas.width;
        };
        Flower.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Flower;
    })();
    objects.Flower = Flower;
})(objects || (objects = {}));
//# sourceMappingURL=flower.js.map