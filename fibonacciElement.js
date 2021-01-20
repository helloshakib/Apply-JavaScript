
//fibonacci using recursive function

function fibonacci(n){
    // if(n==0){
    //     return 0;
    // }
    if(n<=1){
        return n;
    }
    else{
        return fibonacci(n-1) + fibonacci(n-2);
    }
}
var result = fibonacci(1);
console.log(result);
