module.exports = { sumFromArray, stringToArray };

function sumFromArray(array) {
    return array.reduce((a, b) => a + b, 0);
}


function stringToArray(string) {
    return [...string];
}