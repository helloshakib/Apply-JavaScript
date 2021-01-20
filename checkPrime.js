function checkPrime(n){
    for(var i=2; i<n; i++){
        if(n%i == 0){
            return ('Not a Prime Number');
        }
    }
    return 'Your number is a prime number';
}
var result = checkPrime(57);
console.log(result);


