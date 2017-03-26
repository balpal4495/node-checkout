module.exports = { sumFromArray };

function sumFromArray(array) {
    return array.reduce((a, b) => a + b, 0);
}
