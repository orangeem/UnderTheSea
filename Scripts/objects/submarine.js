/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // submarine Class
    var Submarine = (function () {
        function Submarine(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "submarine");
            this.image.x = 50;
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            game.addChild(this.image);
        }
        Submarine.prototype.update = function () {
            this.image.y = this.stage.mouseY;
        };
        Submarine.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Submarine;
    })();
    objects.Submarine = Submarine;
})(objects || (objects = {}));
//# sourceMappingURL=submarine.js.map