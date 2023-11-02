// app.js
const fs = require('fs');
const readline = require('readline');
const greetings = require('./greeting');

function write(output_file, greeting){
    // Save the greeting to the output.txt file
    fs.writeFile(output_file, greeting, (err) => {
        if (err) {
            console.error('Error saving the greeting:', err);
        } else {
            console.log('Greeting saved to output.txt.');
        }
        // Close the readline interface
        rl.close();
    });    
}

const rl = readline.createInterface({ input: process.stdin, output: process.stdout, });

console.log(rl);
rl.question('Enter your name: ', (name) => {
    // Generate the personalized greeting
    const greeting = greetings.generateGreeting(name);
    write('output.txt', greeting)
    
});
