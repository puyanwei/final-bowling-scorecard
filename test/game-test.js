describe('#Game', () => {
    beforeEach(() => {
        let game = new Game();
    });

    describe('initialize', () => {
        it('Creates an empty scorecard array', () => {
            expect(game.scorecard).toBe([]);
            expect(game.scorecard.length).toEqual(0);
        });
    });
});
