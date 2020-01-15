
setTimeout(() => {
    const A = []
    const res = solution(A)
    console.log(res)
}, 5*1000);

// ▶single
// single element✘WRONG ANSWER
// got 2 expected 1
function solution(A) {
    const calcArray = [];

    if(A && A.length == 0){
        return 1;
    }
    if(A && A.length == 1){
        return 2;
    }

    for (let i = 0; i < A.length; i++) {
        const element = A[i];
        calcArray[element] = element;
    }

    for (let i = 1; i < calcArray.length; i++) {
       if(!calcArray[i]){
           return i;
       }
    }

    return A.length + 1;
}
