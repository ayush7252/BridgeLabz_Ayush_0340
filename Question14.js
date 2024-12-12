// 14. Print the first 10 Fibonacci numbers without recursion



function Fibonacci(){
    let a = 0;
    let b = 1;
    let c = 0;
    let count = 0;
    while (count  < 10)
        {
            if(a == 0 && b == 1){
                console.log(a);
                console.log(b);
                count+=2;
            }
            c = a + b;
            console.log(c);
            a = b;
            b = c;
            count++;
        }
}

Fibonacci();