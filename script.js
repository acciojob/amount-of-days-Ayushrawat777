//your JS code here. If required.
// program to check leap year
function daysOfAYear(year) {
    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        return 366
    } else {
       return 365
    }
}

// take input
 const year = prompt('Enter a year:'); 
 daysOfAYear(year); 
alert(daysOfAYear(year));