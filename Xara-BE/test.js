const main = require('./index').main;
const dataPoints = require('./datapoints');
const expected = require('./expectedResult');

let result = main(dataPoints);
console.log('result', result[0].children.length);
console.log('expected result', expected[0].children.length);

