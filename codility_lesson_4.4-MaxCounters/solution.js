
setTimeout(() => {
    const A = [3,4,4,6,1,4,4]
    const N = 5;
    const res = solution(N, A)
    console.log(res.join(','))
}, 5*1000);


function solution(N, A) {

    const counters = {}

    for (let i = 1; i <= N; i++) {
        counters[i] = 0;
    }

    let currentMax = 0;
    let currentMin = 0;

    for (let i = 0; i < A.length; i++) {
        const val = A[i];

        if(counters[val] < currentMin){
            counters[val] = currentMin;
        }

        if(val == N+1){
            currentMin = currentMax;
        }else{
            counters[val]++
            if(counters[val] > currentMax){
                currentMax = counters[val]
            }
        }
    }
    const result = []
    for(let prop in counters){
        if(counters[prop] < currentMin){
            counters[prop] = currentMin
        }

        result.push(counters[prop])
    }

    return result
}
