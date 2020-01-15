/*
An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

Your goal is to find that missing element.

Write a function:

function solution(A);

that, given an array A, returns the value of the missing element.

For example, given array A such that:

  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
the elements of A are all distinct;
each element of array A is an integer within the range [1..(N + 1)].
*/

// ▶single
// single element✘WRONG ANSWER
// got 2 expected 1

const arr = [2, 3, 1, 5];

function solution(A) {

    if(A && A.length == 0){
        return 1;
    }
    if(A && A.length == 1){
        return 2;
    }

    var binaryArr = [];

    for (let i = 0; i < A.length; i++) {
        const element = A[i];
        binaryArr[element] = true;
    }

    for (let j = 1; j < binaryArr.length; j++) {
        const element = binaryArr[j];

        if(!element){
            return j;
        }
    }

    return A.length + 1;
}


console.log(solution(arr));
console.log(solution([1]));
console.log(solution([2,1]));
console.log(solution([2, 3, 4, 5]));
console.log(solution([1, 3, 2, 4]));

