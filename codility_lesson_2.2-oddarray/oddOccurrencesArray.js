/*
    N integers, non empty array,
    odd number of elements (3,5,7 length)
    each element is duplicated except one [1,3,1,3,4,5,5] => 4 is the exception?
    find the exception

    //assume - all but one of the values in A occur an even number of times.
*/

setTimeout(() => {
    const A = [1,3,1,3,4,5,5]
    const res = solution(A)
    console.log(res)
}, 5*1000);

function solution(A) {
    const occurenceMap = {}

    for (let i = 0; i < A.length; i++) {
        const curr = A[i]
        if(!occurenceMap[curr]){
            occurenceMap[curr] = 1
        }else{
            occurenceMap[curr] = 2
        }
    }

    for(let prop in occurenceMap){
        if(occurenceMap[prop] == 1){
            return parseInt(prop)
        }
    }
}
