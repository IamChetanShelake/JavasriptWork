const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Initialize an empty array
let myArray = [];

// Prompt the user for input
rl.question('Enter elements separated by spaces: ', (answer) => {
    // Split the user input into an array
    myArray = answer.split(' ');

    // Print the elements using a for loop
    console.log("\nElements in the array:");

    for (let i = 0; i < myArray.length; i++) {
        console.log(myArray[i]);
    }

    // Close the readline interface
    rl.close();
});
