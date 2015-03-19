/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // treasurebox Class
    var Treasurebox = (function () {
        function Treasurebox(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "treasurebox");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();
            this.dx = 5;
            game.addChild(this.image);
        }
        Treasurebox.prototype.update = function () {
            this.image.x -= this.dx;
            if (this.image.x < 0) {
                this.reset();
            }
        };
        Treasurebox.prototype.reset = function () {
            this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
            this.image.x = this.stage.canvas.width;
        };
        Treasurebox.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Treasurebox;
    })();
    objects.Treasurebox = Treasurebox;
})(objects || (objects = {}));
//# sourceMappingURL=treasurebox.js.map