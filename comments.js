//Create web server
//Create a new express server
const express = require('express');
const app = express();

//Create a new route
app.get('/comments', (req, res) => {
    res.send('This is a new route');
});

//Listen to a port
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

//Run the server
//Run the server by typing node comments.js in the terminal window. You should see the message Server is running on port 3000 in the terminal window. You can access the route by visiting http://localhost:3000/comments in your browser.