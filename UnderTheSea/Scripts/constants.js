var constants;
(function (constants) {
    // State Machine Constants
    constants.MENU_STATE = 0;
    constants.PLAY_STATE = 1;
    constants.GAME_OVER_STATE = 2;
    constants.GAME_INSTRUCTION_STATE = 3;
    constants.PLAY_STATE2 = 4;
    constants.PLAY_BOSS = 5;
    constants.ENDING = 6;
    // Game Constants
    constants.SHARK_NUM = 3;
    constants.OCTOPUS_NUM = 4;
    constants.JETSAM_NUM = 5;
    constants.LABEL_FONT = "40px Arial";
    constants.LABEL_COLOUR = "#FF007F";
    constants.SUBMARINE_LIVES = 3;
    constants.SUBMARINE_HP = 100;
    constants.SCORE_HP;
    constants.SCORE_LIVES;
    constants.SCORE_SCORE;
    constants.BULLET_FLAG = false;
    constants.BULLET_Y;
    constants.BOSS_HP;
})(constants || (constants = {}));
//# sourceMappingURL=constants.js.map