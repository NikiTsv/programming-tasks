// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

setTimeout(() => {
    solution(12800);
}, 5*1000);


function solution(N) {
    const binary = N.toString(2);
    const binaryStr = binary.toString();
    const chars = binaryStr.split('');
    console.log(binaryStr)
    let counter = 0;
    let max = 0;

    for (let i = 0; i < chars.length; i++) {
        const current = chars[i];
        if(current == '0'){
            counter ++;
        }else{
            if(max<counter){
                max = counter
            }
            counter = 0;
        }
    }

    // if(max < counter){
    //     max = counter;
    // }

    return max;
}
