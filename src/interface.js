'use strict';

$(document).ready(() => {
    let game = new Game();

    $('.button').click(() => {
        game.inputBowl(9, 1);
        console.log(game.scorecard);
    });
});
