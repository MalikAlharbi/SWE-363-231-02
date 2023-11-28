const express = require('express');
const router = express.Router();

const predefinedResponses = {
    'What is your name?': 'My name is Chatbot.',
    'How are you?': 'I am doing well, thank you!',
    'What is the meaning of life?': 'The meaning of life is 42.',
    'Exit': 'Goodbye! Have a great day!',
};

router.get('/', (req, res) => {
    res.send('Welcome to Chatbot! Ask me anything or type "exit" to quit.');
});

router.post('/question', (req, res) => {
    const question = req.body.question.trim();

    if (predefinedResponses.hasOwnProperty(question)) {
        const answer = predefinedResponses[question];
        res.send(answer);
    } else {
        res.send("I'm sorry, I don't understand. Can you please ask a different question?");
    }
});

module.exports = router;