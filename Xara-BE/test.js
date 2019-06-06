const main = require('./index').main;
const dataPoints = require('./datapoints');

let result = main(dataPoints);
console.log('result1', result[0].children.length);

