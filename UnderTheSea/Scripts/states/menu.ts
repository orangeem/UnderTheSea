﻿/// <reference path="../constants.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/submarine.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/treasurebox.ts" />
/// <reference path="../objects/shark.ts" />
/// <reference path="../objects/octopus.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
module states {
    export function playButtonClicked(event: MouseEvent) {
        stage.removeChild(game);
        submarine.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
    }

    export function instructionButtonClicked(event: MouseEvent) {
        stage.removeChild(game);
        submarine.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.GAME_INSTRUCTION_STATE;
        changeState(currentState);
    }

    export function menuState() {
        ocean.update();
        submarine.update();
    }

    export function menu() {
        var gameNameLabel: objects.Label;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        ocean = new objects.Ocean(stage, game);
        submarine = new objects.Submarine(stage, game);

        // Show Cursor
        stage.cursor = "default";

        // Display Game Over
        gameNameLabel = new objects.Label(stage.canvas.width / 2, 40, "Under the SEA");
        game.addChild(gameNameLabel);

        // Display Play Again Button
        playButton = new objects.Button(stage.canvas.width / 2, 250, "playButton");
        game.addChild(playButton);
        playButton.addEventListener("click", playButtonClicked);

        howToPlayButton = new objects.Button(stage.canvas.width / 2, 350, "instructionsButton");
        game.addChild(howToPlayButton);
        howToPlayButton.addEventListener("click", instructionButtonClicked);

        stage.addChild(game);
    }
} 