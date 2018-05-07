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
});
