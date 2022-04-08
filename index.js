// TASK - CREATE A THANK YOU CARD CREATOR

// Build a function named writeCards() tht accepts 2 arguments (array of names and event).
function writeCards(names, event){
    //Initialize value
    let messages = [];
// INIT: Create a for loop with a counter starting at 0.
// COND: Loop should stop once it has iterate over length of array.
        // ["name1", "name2", "name3", "name4", "name5"]
// ITER: Increment at end of each loop.
    for (let i = 0; i < names.length; i++) {
// Create a thank you message for each name inside the loop.
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
//Collect messages in a new array and RETURN the array at end of function (ARRAY METHODS)
    return messages;
}

// TASK - WRITE A FUNCTION

// Building function countDown() tht takes in positive integer.
function countDown(positiveInteger){
// Initialize value.
    let count = " ";
// Starting from that number, counts down to 0 with console.log()
    // ****Running countDown(10) would log 11 times
// INIT: Number
// COND: while i a number is greater than 0, countdown
// ITER: decrease with --
    for( let i = positiveInteger; i >= 0; i--) {
        count = i;
        //let currInt = positiveInteger[i];
        //countDown = countDown + currInt;
        console.log(count);
       
    }
// RETURN VALUE
    //return count;
}
console.log(countDown(0));