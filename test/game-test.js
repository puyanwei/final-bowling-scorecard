'use strict';

describe('#Game', () => {
    let game;

    beforeEach(() => {
        game = new Game();
    });

    describe('initialize', () => {
        it('Creates an empty scorecard array', () => {
            expect(game.scorecard).toEqual(Array(0));
            expect(game.scorecard.length).toEqual(0);
        });
    });

    describe('#inputBowl', () => {
        it('Adds a bowl to the scorecard array', () => {
            game.inputBowl(5, 1);
            let firstBowlScore = game.scorecard[0].score;
            expect(firstBowlScore).toEqual(5);
            expect(game.scorecard.length).toEqual(1);
        });
    });
});
