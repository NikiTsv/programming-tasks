
setTimeout(() => {
    const res = solution(10, 85, 30)
    console.log(res)
}, 5*1000);

function solution(X, Y, D) {
    const distanceToMove = Y-X;
    return Math.ceil(distanceToMove/D)
}
