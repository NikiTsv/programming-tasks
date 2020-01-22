
setTimeout(() => {
    const A = [4,1,3]
    const res = solution(A)
    console.log(res)
}, 5*1000);


function solution(A) {

    let fillMap = {}
    const orderedArr = [];
    for (let i = 0; i < A.length; i++) {
        const curr = A[i];
        fillMap[curr] = true;
        orderedArr[i]= i+1;
    }

    const keys = Object.keys(fillMap);

    if(keys.length != A.length){
        return 0
    }else{
        for (let i = 0; i < orderedArr.length; i++) {
            const val = orderedArr[i]
            if(!fillMap[val]){
                return 0
            }
        }
    }

    return 1;
}
