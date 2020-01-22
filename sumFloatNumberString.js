
const res = start(123.8);
console.log(res)

function start(x){
    var number = x.toString().split('.')[0]
    var afterDot = x.toString().split('.')[1]
    var arr = number.toString().split('')
    var arr2 = afterDot.toString().split('')
    var sum =  arr.reduce((a,b)=> parseFloat(a) + parseFloat(b), 0);
    var sum2 = arr2.reduce((a,b)=> parseFloat(a) + parseFloat(b), 0);

    return sum + sum2
}