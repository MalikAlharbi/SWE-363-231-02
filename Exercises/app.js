const express = require('express');
const app = express();

const chatbotRouter = require('./routes/chatbot');

app.use('/chatbot', chatbotRouter);


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

const fileSystem = require("fs");
if (process.argv.length !== 3) {
  console.error("Usage node app <dir name>");
  process.exit();
}

fileName = process.argv[2];

fileSystem.readdir(fileName, (err, files) => {
  if (err) console.log("cannot read directory");
  else console.log(files);
  process.exit();
});


const customEmitter = require('./eventEmitter');

function simulateUserLogin() {
  const randomDelay = Math.random() * (2 - 0.1) + 0.1;
  const user = `USER_${Math.floor(Math.random() * 10) + 1}`;

  setTimeout(() => {
    const timestamp = new Date().toISOString();
    console.log(`${timestamp}: ${user} logged in`);
    customEmitter.emit('userLoggedIn', { timestamp, user });
    simulateUserLogin();
  }, randomDelay * 1000);
}

customEmitter.on('userLoggedIn', ({ timestamp, user }) => { });

customEmitter.on('userLoggedOut', ({ timestamp, user }) => { });

simulateUserLogin();
