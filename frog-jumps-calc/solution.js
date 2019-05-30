// find the minimum jumps a frog has to make where X = start, Y = finish, D = frog jump distance
function solution(X, Y, D) {
    const distance = Y-X;
    if(distance <= 0){
        return 0;
    }

    return Math.ceil(distance / D);
}


console.log(solution(0, 1000000000, 100000000));