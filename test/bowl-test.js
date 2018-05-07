'use strict';

describe('#Bowl', () => {
    let bowl;

    describe('initialize', () => {
        it('Inputs the score of the bowl', () => {
            bowl = new Bowl(5, 2);
            expect(bowl.score).toEqual(5);
        });
        it('Inputs whether it was the first or second bowl', () => {
            bowl = new Bowl(6, 1);
            expect(bowl.index).toEqual(1);
        });
    });
});
