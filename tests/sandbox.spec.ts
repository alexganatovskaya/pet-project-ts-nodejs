import { expect } from 'chai';

describe.skip('Hook training: Coffee Cafe', () => {
    let coffeeCups: number;

    before(() => {
        coffeeCups = 0;
        console.log('🌅 Coffee Cafe is open');
    });

    beforeEach(() => {
        coffeeCups += 1;
        console.log('☕ Coffee Cup is done');
    });

    it('First client is served', () => {
        expect(coffeeCups).to.equal(1);
    });

    it('Second client is served', () => {
        expect(coffeeCups).to.equal(2);
    });

    after(() => {
        console.log('🌃 CoffeeCafe is closed. Cups sum: ' + coffeeCups);
    });

});