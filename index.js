const express = require('express');
const app = express();

const _store = {
    A: { price: 50, label: 'A' },
    B: { price: 30, label: 'B' },
    C: { price: 20, label: 'C' },
    D: { price: 15, label: 'D' }
}

app.get('/', (req, res) => {
  res.json(_store);
});

const server = app.listen(3000, () => {
  const port = server.address().port;
  console.log('Example app listening at port %s', port);
});
module.exports = () => {};
