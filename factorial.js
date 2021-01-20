// Calculate Factorial using for loop
/*var factorial =1;
for(var i=1; i<=5; i++){
    factorial = factorial * i;
    console.log(i, factorial);
}*/




// Calculate Factorial using while loop
/*var factorial =1;
var i=1;
while(i<=7){
    factorial=factorial*i;
    i++;
}
console.log(factorial);*/




// Calculate Factorial using for Function and For loop 
/*function factorial(n){
    var factorial = 1;
    for(var i=1; i<=n; i++){
        factorial = factorial *i;
    }
    return factorial;
}
var result = factorial(0);
console.log(result);*/



// Calculate Factorial using  Function and while loop 

/*function factorial(n){
    var factorial =1;
    var i=1;
    while(i<=n){
        factorial=factorial*i;
        i++;
    }
    return factorial;
}
var result = factorial(5);
console.log(result);*/


// Calculate Factorial using Recursive Function - kono function er moddhe theke jodi oi functio ke call kora hoy tahole take recursive function bole

function factorial(n){
    if(n==0){
        return 1;
    }
    else{
        return n * factorial(n-1);
    }
}
var result = factorial(4);
console.log(result);
