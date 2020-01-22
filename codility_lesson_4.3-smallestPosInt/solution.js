setTimeout(() => {
    const A = [0,3,5,6,8,100,150, 1000000, -1000000]
    const res = solution(A)
    console.log(res)
}, 5*1000);


function solution(A) {

    const fillMap = {}
    let min = null
    let max = null

    for (let i = 0; i < A.length; i++) {
        const val = A[i];
        if(val>0){
            fillMap[val] = true
        }
        if(min == null || val < min){
            if(val > 0){
                min = val
            }
        }
        if(max == null || val > max){
            if(val>0){
                max = val
            }
        }
    }

    if(A.length == 1){
        if(A[0] == 1){
            return 2
        }else{
            return 1
        }
    }

    if(min == null && max == null){
        return 1;
    }
    for (let i = 1; i <= max; i++) {
        if(!fillMap[i]){
            return i;
        }
    }
    return max + 1;
}
