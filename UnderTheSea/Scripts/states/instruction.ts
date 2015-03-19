/// <reference path="../constants.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/submarine.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/treasurebox.ts" />
/// <reference path="../objects/shark.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
module states {


    export function instructionState() {
        ocean.update();
    }

    // back to menu when backToMenu Button is clicked
    export function backToMenuClicked(event: MouseEvent) {
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.MENU_STATE;
        changeState(currentState);
    }

    export function instruction() {

        var howtoplayLabel: objects.Label;
        var enemy: objects.Label;
        var treasure: objects.Label;
        var explainTxt: createjs.Text;
        var enemyTxt: createjs.Text;
        var enemyTitle: createjs.Text;
        var itemTxt: createjs.Text;
        var itemTitle: createjs.Text;
        var characterTxt: createjs.Text;
        var characterTitle: createjs.Text;

        var img_sub = new createjs.Sprite(managers.Assets.atlas, "submarine");
        var img_shark = new createjs.Sprite(managers.Assets.atlas, "shark");
        var img_octopus = new createjs.Sprite(managers.Assets.atlas, "octopus");
        var img_box = new createjs.Sprite(managers.Assets.atlas, "treasurebox");
        var img_flower = new createjs.Sprite(managers.Assets.atlas, "flower");
        var img_jetsam = new createjs.Sprite(managers.Assets.atlas, "jetsam");
        var img_boss = new createjs.Sprite(managers.Assets.atlas, "boss");

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        ocean = new objects.Ocean(stage, game);
        
        // Show Cursor
        stage.cursor = "default";

        // Display instruction
        howtoplayLabel = new objects.Label(stage.canvas.width / 2, 40, "How to play");
        game.addChild(howtoplayLabel);

        explainTxt = new createjs.Text("Ursula took the mermaid!!! To save the mermaid, kill all enemies\nwith your bubble bullet! It will shot when you click the mouse", "30px Arial", "#86E57F");
        explainTxt.textAlign = "center";
        explainTxt.x = stage.canvas.width / 2;
        explainTxt.y = 100;
        game.addChild(explainTxt);

        enemyTitle = new createjs.Text("- Enemies -", "30px Arial", "#ffffff");
        enemyTitle.x = 114;
        enemyTitle.y = 170;
        game.addChild(enemyTitle);

        enemyTxt = new createjs.Text("Avoid or shot enemy with your submarine", "20px Arial", "#FFBB00");
        enemyTxt.x = 114;
        enemyTxt.y = 203;
        game.addChild(enemyTxt);

        img_octopus.x = 531;
        img_octopus.y = 167;
        game.addChild(img_octopus);

        img_jetsam.x = 601;
        img_jetsam.y = 167;
        game.addChild(img_jetsam);

        img_shark.x = 703;
        img_shark.y = 167;
        game.addChild(img_shark);

        itemTitle = new createjs.Text("- Item -", "30px Arial", "#ffffff");
        itemTitle.textAlign = "right";
        itemTitle.x = 825;
        itemTitle.y = 268;
        game.addChild(itemTitle);

        itemTxt = new createjs.Text("Touch treasure box or flowr with your submarine to get score or hp", "20px Arial", "#FFBB00");
        itemTxt.textAlign = "right";
        itemTxt.x = 825;
        itemTxt.y = 298; 
        game.addChild(itemTxt);

        img_box.x = 114;
        img_box.y = 268;
        game.addChild(img_box);

        img_flower.x = 193;
        img_flower.y = 295;
        game.addChild(img_flower);

        characterTitle = new createjs.Text("- Charaters -", "30px Arial", "#ffffff");
        characterTitle.x = 114;
        characterTitle.y = 355;
        game.addChild(characterTitle);

        characterTxt = new createjs.Text("Your submarine and final boss Ursula", "20px Arial", "#FFBB00");
        characterTxt.x = 114;
        characterTxt.y = 388;
        game.addChild(characterTxt);

        img_sub.x = 485;
        img_sub.y = 377;
        game.addChild(img_sub);
        
        img_boss.x = 590;
        img_boss.y = 348;
        game.addChild(img_boss);
               
        // Display back to menu Button
        backToMenuButton = new objects.Button(stage.canvas.width / 2, 500, "backToMenuButton");
        game.addChild(backToMenuButton);
        backToMenuButton.addEventListener("click", backToMenuClicked);

        stage.addChild(game);
    }
        

}

 