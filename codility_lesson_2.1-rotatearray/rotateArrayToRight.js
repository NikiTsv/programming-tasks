// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

setTimeout(() => {
    const A = [1,3,5]
    const K = 3;
    const res = solution(A, K)
    console.log(res)
}, 5*1000);



function solution(A, K) {
    for (let i = 1; i <= K; i++) {
        const result = [];
        for (let j = 0; j < A.length; j++) {
            const current = A[j];
            if(j == A.length-1){
                result[0] = current;
            }else{
                result[j+1] = current;
            }
        }

        A = result.slice(0);
    }

    return A
}
