const express = require('express');
const app = express();
const utils = require('./utils');

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

const server = app.listen(3000, () => {
  const port = server.address().port;
  console.log('Example app listening at port %s', port);
});
module.exports = () => {};
