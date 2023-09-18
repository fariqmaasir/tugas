function fibo(a) {
    let num = [];
    num = [1,1,0];
    for (let i = 1; i < a; i++) {
        num[2] = num[0] + num[1];
        num[0] = num[1];
        num[1] = num[2];
    }
    return num[0];
}
console.log(fibo(6));