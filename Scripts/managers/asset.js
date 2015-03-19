var managers;
(function (managers) {
    // Image and Sound Manifest;
    var assetManifest = [
        { id: "ocean", src: "assets/images/underthesea.png" },
        { id: "shot", src: "assets/sounds/bubble.ogg" },
        { id: "uhoh", src: "assets/sounds/uhoh.ogg" },
        { id: "tada", src: "assets/sounds/tada.ogg" },
        { id: "twang", src: "assets/sounds/twang.ogg" },
        { id: "boo", src: "assets/sounds/boo.ogg" },
        { id: "aha", src: "assets/sounds/aha.ogg" },
        { id: "uuu", src: "assets/sounds/uuu.ogg" },
        { id: "yam", src: "assets/sounds/yamyam.ogg" },
        { id: "bgm", src: "assets/sounds/underthesea.ogg" }
    ];
    // SpriteSheet Data Object
    //box 170, 0, 66, 68
    //shark 6, 73, 122, 88
    //octopus 1, 0, 68, 70
    //submarine 85, 0, 84, 68
    //playagain 0, 160, 237, 58
    //howtoplay 6,285, 237,59
    //playgame 247, 240, 233, 66
    //finalboss 249, 0, 233, 238
    //backtomenu 12, 221, 223, 65
    //bubble 158, 90,59, 58
    //jetsam 249, 314, 100, 62
    //flower 383, 315, 31, 31
    var spriteSheetData = {
        "images": ["assets/images/utilities.png"],
        "frames": [
            [6, 73, 122, 87],
            [6, 285, 237, 59],
            [170, 0, 66, 68],
            [85, 0, 84, 68],
            [247, 240, 233, 66],
            [0, 160, 237, 58],
            [12, 221, 223, 65],
            [1, 0, 68, 70],
            [159, 90, 60, 58],
            [249, 0, 233, 238],
            [249, 314, 100, 62],
            [383, 315, 31, 31]
        ],
        "animations": {
            "shark": [0],
            "instructionsButton": [1],
            "treasurebox": [2],
            "submarine": [3],
            "playButton": [4],
            "tryAgainButton": [5],
            "backToMenuButton": [6],
            "octopus": [7],
            "bubble": [8],
            "boss": [9],
            "jetsam": [10],
            "flower": [11]
        }
    };
    // Asset Manager Class
    var Assets = (function () {
        function Assets() {
        }
        Assets.init = function () {
            createjs.Sound.initializeDefaultPlugins();
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(assetManifest);
            this.atlas = new createjs.SpriteSheet(spriteSheetData);
        };
        return Assets;
    })();
    managers.Assets = Assets;
})(managers || (managers = {}));
//# sourceMappingURL=asset.js.map