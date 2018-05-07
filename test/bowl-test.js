'use strict';

describe('#Bowl', () => {
    let bowl;

    describe('initialize', () => {
        it('Inputs the score of the bowl', () => {
            bowl = new Bowl(5);
            expect(bowl.score).toEqual(5);
        });
    });
});
