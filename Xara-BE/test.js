const main = require('./index').main;
const dataPoints = require('./datapoints');

let result = main(dataPoints);
console.log('result1', result[0].children.length);

let result2 = main(dataPoints);
console.log('result2', result2[0].children.length);
