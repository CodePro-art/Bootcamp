// const steps = (N) => {
//   for(let i = 0; i<N ;i++)
//     console.log("a".repeat(i) + " ".repeat(N-i));
// }
function steps(N) {
    for (let row = 0; row < N; row++) {
        let str = '';
        for (let col = 0; col < N; col++) 
          str += col <= row ? '#' : ' ';
        console.log(str);
    }
}

steps(10);