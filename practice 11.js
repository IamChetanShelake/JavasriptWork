//file handling program for the transferring file data into another file and performed some logical operation on it 
const fs = require('fs');

// Source and destination file paths
const sourceFilePath = 'D:/59_chetan_shelake/newFile.txt';
const destinationFilePath = 'D:/59_chetan_shelake/TransferDataFile.txt';

// Read data from the source file
fs.readFile(sourceFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error(`Error reading source file: ${err}`);
        return;
    }

    // Split the data by newline character to get individual numbers
    const numbers = data.split('\n');

    // Filter even numbers
    const evenNumbers = numbers.filter(number => parseInt(number) % 2 === 0);

    // Convert even numbers array to string with newline character
    const evenNumbersString = evenNumbers.join('\n');

    // Write even numbers to the destination file
    fs.writeFile(destinationFilePath, evenNumbersString, 'utf8', err => {
        if (err) {
            console.error(`Error writing to destination file: ${err}`);
            return;
        }
        console.log(`Even numbers transferred successfully from "${sourceFilePath}" to "${destinationFilePath}"`);
    });
});

