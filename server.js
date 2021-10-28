const express = require('express'); // Include ExpressJS
const app = express(); // Create an ExpressJS app
const bodyParser = require('body-parser'); // middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Route to Homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/static/index.html');
});

// Route to Login Page
app.get('/thanks', (req, res) => {
  res.sendFile(__dirname + '/static/thankyou.html');
});

const port = 3000 // Port we will listen on

// Function to listen on the port
app.listen(port, () => console.log(`This app is listening on port ${port}`));