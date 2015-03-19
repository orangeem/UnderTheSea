/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // shark class
    var Jetsam = (function () {
        function Jetsam(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "jetsam");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();
            game.addChild(this.image);
        }
        Jetsam.prototype.update = function () {
            this.image.y += this.dy;
            this.image.x -= this.dx;
            if (this.image.x < 0) {
                this.reset();
            }
        };
        Jetsam.prototype.reset = function () {
            this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
            this.dx = Math.floor(Math.random() * 7 + 7);
            this.dy = Math.floor(Math.random() * -4) + Math.floor(Math.random() * 4);
            this.image.x = this.stage.canvas.width;
        };
        Jetsam.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Jetsam;
    })();
    objects.Jetsam = Jetsam;
})(objects || (objects = {}));
//# sourceMappingURL=jetsam.js.map