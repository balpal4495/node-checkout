const assert = require('assert');
const checkout = require('.');
const utils = require('./utils');

it('is a function', () => assert.equal(typeof checkout, 'function'));


describe('utility functions', () => {
    it('get sum from an array of numbers', () =>{
        let data = [1, 2, 3, 4, 5];
        let sum = utils.sumFromArray(data);
        assert.equal(sum, 15);  
    });

    it('should turn the string of items into an array', () =>{
        let data = 'DABA';
        let comparisonData = ['D', 'A', 'B', 'A'];
        data = utils.stringToArray(data);
        assert.deepEqual(data, comparisonData);  
    });
});
