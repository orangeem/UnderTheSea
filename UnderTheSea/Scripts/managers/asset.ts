module managers {
    // Image and Sound Manifest;
    var assetManifest = [
        { id: "loading", src: "assets/images/loading.jpg" },
        { id: "ocean", src: "assets/images/Untitled-6.png" },
        { id: "engine", src: "assets/sounds/engine.ogg" },
        { id: "thunder", src: "assets/sounds/thunder.ogg" },
        { id: "yay", src: "assets/sounds/yay.ogg" },
        { id: "bgm", src: "assets/sounds/underthesea.ogg" }
        
    ];

    // SpriteSheet Data Object
    //box 170, 0, 96, 101
    //shark 6, 75, 122, 88
    //octopus 1, 0, 68, 70
    //submarine 85, 0, 84, 68
    //playagain 0, 203, 237, 58
    //howtoplay 0,285, 237,59
    //playgame 247, 269, 234, 65
    //finalboss 268, 0, 233, 238


    var spriteSheetData = {
        "images": ["assets/images/utilities.png"],
        "frames": [
            [6, 75, 122, 88],
            [0, 285, 237, 59],
            [170, 0, 96, 101],
            [85, 0, 84, 68],
            [247, 269, 234, 65],
            [0, 203, 237, 58],
            [0, 285, 237, 59]
        ],
        "animations": {
            "shark": [0],
            "instructionsButton": [1],
            "treasurebox": [2],
            "submarine": [3],
            "playButton": [4],
            "tryAgainButton": [5],
            "howtoplayButton":[6]
        }
    }

    // Asset Manager Class
    export class Assets {
        public static manifest;
        public static data;

        public static loader;
        public static atlas: createjs.SpriteSheet;

        public static init() {
            createjs.Sound.initializeDefaultPlugins();
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(assetManifest);
            this.atlas = new createjs.SpriteSheet(spriteSheetData);
        }

    }
} 