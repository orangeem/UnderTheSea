module constants {
    // State Machine Constants
    export var MENU_STATE: number = 0;
    export var PLAY_STATE: number = 1;
    export var GAME_OVER_STATE: number = 2;
    export var GAME_INSTRUCTION_STATE: number = 3;
    export var PLAY_STATE2: number = 4;

    // Game Constants
    export var SHARK_NUM: number = 3;
    export var OCTOPUS_NUM: number = 4;
    export var LABEL_FONT = "30px Arial";
    export var LABEL_COLOUR = "#ff7700";
    export var SUBMARINE_LIVES = 3;
    export var SUBMARINE_HP = 100;
    export var SCORE_HP: number;
    export var SCORE_LIVES: number;
    export var SCORE_SCORE: number;
    export var BULLET_FLAG: boolean = false;
    export var BULLET_Y: number;
}