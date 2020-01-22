
setTimeout(() => {
    const A = [0]
    const res = solution(A)
    console.log(res)
}, 1 * 1000);

//0 ≤ P < Q < N, is passing when P is traveling to the east and Q is traveling to the west.
// seems this is valid only for length of 2?? issue
function solution(A) {

    if(A.length == 2){
        if(A[0] > A[1]){
            return 0
        }
    }

    let passingCars = 0;
    let firstDirection;
    let firstDirectionCars = 0;
    for (let i = 0; i < A.length; i++) {
        const value = A[i];

        if (i == 0) {
            firstDirection = value;
            firstDirectionCars++
        } else {
            if (value != firstDirection) {
                 passingCars += firstDirectionCars
                 if(passingCars > 1000000000){
                     return -1;
                 }
            }else{
                firstDirectionCars++
            }
        }
    }

    return passingCars;
}