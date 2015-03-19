/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // octopus class
    var Octopus = (function () {
        function Octopus(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "octopus");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();
            game.addChild(this.image);
        }
        Octopus.prototype.update = function () {
            this.image.y += this.dy;
            this.image.x -= this.dx;
            if (this.image.x < 0) {
                this.reset();
            }
        };
        Octopus.prototype.reset = function () {
            this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
            this.dx = Math.floor(Math.random() * 4 + 4);
            this.dy = Math.floor(Math.random() * -5) + Math.floor(Math.random() * 5);
            this.image.x = this.stage.canvas.width;
        };
        Octopus.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Octopus;
    })();
    objects.Octopus = Octopus;
})(objects || (objects = {}));
//# sourceMappingURL=octopus.js.map