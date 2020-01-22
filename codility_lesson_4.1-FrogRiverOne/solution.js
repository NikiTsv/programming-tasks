
setTimeout(() => {
    const A = [2,3,2,4,2,3,5,4] //7 length
    const X = 5;
    const res = solution(X,A)
    console.log(res)
}, 5*1000);

function solution(X, A) {

    let frogPos = 0;
    const maxPos = X + 1;
    const pathFilledMap = {}
    let requiredTime = 0;

    for (let K = 0; K < A.length; K++) {
        const second = K
        const position = A[K]
        pathFilledMap[position] = true;

        while(pathFilledMap[frogPos+1] == true){
            frogPos++;
            console.log(frogPos)
        }

        if(frogPos != X){
            requiredTime ++;
        }
    }

    if(frogPos != X){
        return -1
    }

    return requiredTime;
}
