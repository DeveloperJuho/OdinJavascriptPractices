/*/ In this problemsolving task, program will take X amount of random integers and return the third highest number /*/

// Common variables

let numberArray = [];
let incrementArray = [];

// Generate ten random integers

for (let i = 0; i < 10; i++){
    numberArray.push(Math.floor(Math.random()*100));
}

// Arrange the array in to incremental order

// First push the first number in to the array

incrementArray[0] = numberArray[0];

// Start from the second number as we have one number in the array already
for (let a = 1; a < numberArray.length; a++){
    // Turn boolean for the while loop to false
    let numberSet = false;

    // While loop for finding and setting the number
    while(numberSet == false){
        // For the length of the new array, loop this
        for(let b = 0; b < incrementArray.length; b++){           
            // Check if the current number is lower or the same; if it is add it to the current index
            if(numberArray[a] <= incrementArray[b] && numberSet == false){
                // Add the number in to the index of b, delete zero values and the value being added
                incrementArray.splice(b, 0, parseInt(numberArray[a]));
                // Set the boolean to true
                numberSet = true;
            }
        }

        // If the number is higher than anything in the array, we'll add the number to the end of the array
        if(numberSet == false){
            incrementArray.push(numberArray[a]);
            numberSet = true;
        }
    }
}

// Results
console.log(incrementArray);
console.log(incrementArray[incrementArray.length-3]);

/*/ The elegant solution using sort function and passing it a comparison function
    This solution is pretty much straight from Mozillas guides, which is why
    I decided to write my own solution to test myself

console.log(numberArray.sort(compareFn));
console.log(numberArray.sort(compareFn)[numberArray.length-3]);


function compareFn(a,b){
    if (a > b){
        return 1;
    }
    else if (a < b){
        return -1;
    }
    else return 0;
}
/*/