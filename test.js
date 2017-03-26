const assert = require('assert');
const checkout = require('.');
const utils = require('./utils');
const request = require('request');
const rp = require('request-promise');
const BASE_URL = 'http://localhost:3000';

it('is a function', () => assert.equal(typeof checkout, 'function'));



const _store = {
    A: { price: 50, label: 'A' },
    B: { price: 30, label: 'B' },
    C: { price: 20, label: 'C' },
    D: { price: 15, label: 'D' }
};

describe('init', () => {
    it('get store', () =>{
        return rp(`${BASE_URL}/`)
            .then((res) => {
                let response = JSON.parse(res);
                assert.deepEqual(response, _store);
            });
    });
});

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


describe('checkout', () => {
    it('calculate items provided', () =>{
        return rp(`${BASE_URL}/calculate/DABA`)
            .then((res) => {
                let response = JSON.parse(res);
                assert.equal(response, 145)
            });
    });
});
