const readline = require('readline');

const predefinedResponses = {
    'What is your name?': 'My name is Chatbot.',
    'How are you?': 'I am doing well, thank you!',
    'What is the meaning of life?': 'The meaning of life is 42.',
    'Exit': 'Goodbye! Have a great day!',
};


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


function processInput(input) {
    input = input.trim();

    if (predefinedResponses.hasOwnProperty(input)) {
        console.log(predefinedResponses[input]);
    } else {
        console.log("I'm sorry, I don't understand. Can you please ask a different question?");
    }
}


function promptUser() {
    rl.question('Ask me something: ', (input) => {
        if (input.toLowerCase() === 'exit' || input.toLowerCase() === 'quit') {
            console.log(predefinedResponses['Exit']);
            rl.close();
        } else {
            processInput(input);
            promptUser();
        }
    });
}

console.log('Welcome to Chatbot! Ask me anything or type "exit" to quit.');
promptUser();