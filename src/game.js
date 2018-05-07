'use strict';

class Game {
    constructor() {
        this.scorecard = [];
    }

    inputBowl(score, index) {
        let bowl = new Bowl(score, index);
        this.scorecard.push(bowl);
    }
}
