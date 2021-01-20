/*var year = 3566;
if(year % 4 == 0){
    console.log(year, 'is a Leap Year');
}
else{
    console.log(year,'Not leap year');
}*/

/*function leapYear(year){
    var remainder = year % 4;
    if(remainder==0){
        return true;
    }
    else{
        return false;
    }
}
var result = leapYear(1700);
console.log(result)*/

function leapYear(year){
    if((year%4==0) && (year%100 !==0) || (year%400==0)){
        return true;
    }
    else{
        return false;
    }
}
var result = leapYear(1700);
console.log(result);