const express = require('express');
const app = express();
const utils = require('./utils');
const _ = require('lodash');

const _store = {
    A: { price: 50, label: 'A' },
    B: { price: 30, label: 'B' },
    C: { price: 20, label: 'C' },
    D: { price: 15, label: 'D' }
}

app.get('/', (req, res) => {
  res.json(_store);
});

app.get('/calculate/:items', (req, res) => {
    let _itemString = req.params.items;
    let _itemArray = utils.stringToArray(_itemString);
    let _itemPricesArray = [];
    _itemArray.forEach((item) => {
        _itemPricesArray.push(_store[item].price);
    });
  
    let total = utils.sumFromArray(_itemPricesArray);
    res.json(total);
});

app.get('/calculateDiscounts/:items', (req, res) => {
    let _itemString = req.params.items;
    let _itemArray = utils.stringToArray(_itemString);
    
    /**
     * This will group all the items being sent
     */
    let _groupedItems = 
     _itemArray.reduce((allItems, item) => { 
        if (item in allItems) {
            allItems[item]++;
        } else {
            allItems[item] = 1;
        }
            return allItems;
    }, {});


    /**
     * This should ideally be wrapped in a utility function
     */
    let discounts = [];
     Object.keys( _groupedItems ).forEach( item => {
         //only discount is important but the other data can be useful
          let newObject = {item: item, occurence: _groupedItems[item], discount: null};
          if(item === 'A' && _groupedItems[item] >= 3 ) {
              let _discount = _groupedItems[item] / 3;
              _discount = Math.floor(_discount);
              _discount = _discount * 20;
              newObject.discount = _discount;
          }
          if(item === 'B' && _groupedItems[item] >= 2) {
              let _discount = _groupedItems[item] / 2;
              _discount = Math.floor(_discount);
              _discount = _discount * 15;
              newObject.discount = _discount;
          }
          discounts.push(newObject.discount);
      }); 
    discounts = _.compact(discounts); // remove any nulls or undefined values from array
    let total = utils.sumFromArray(discounts);
    res.json(total);
});

const server = app.listen(3000, () => {
  const port = server.address().port;
  console.log('Example app listening at port %s', port);
});
module.exports = () => {};
