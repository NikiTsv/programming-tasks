
setTimeout(() => {
    const A = [-1,1,-2]
    const res = solution(A)
    console.log('result', res)
}, 5*1000);

function solution(A) {

    let sum=0;

    for (let i = 0; i < A.length; i++) {
        sum+=A[i];
    }

    let sumUpToNow = 0;
    let absMin = null
    for (let i = 0; i < A.length-1; i++) {
        sumUpToNow = sumUpToNow + A[i];
        const restSum = sum - sumUpToNow;
        const currAbsDiff = Math.abs(sumUpToNow - restSum);
        if(absMin == null || currAbsDiff < absMin){
            absMin = currAbsDiff
        }
    }

    return absMin;
}