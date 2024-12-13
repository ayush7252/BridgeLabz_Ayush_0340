// 30. Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.


let str1 = "12345"
let str2 = "56789"

function Result(str1, str2) {

    let sum = 0;
    sum += Number(str1) + Number(str2);
    return sum;

}

let ans = Result(str1, str2).toString();
console.log(ans);
console.log(typeof(ans));

