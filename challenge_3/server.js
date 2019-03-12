const express = require('express');
const bluebird = require('bluebird');

const app = express();
bluebird.promisifyAll(app);
const port = 3000;

app.use(express.json());
app.use(express.static('public'));



app.listen(port, () => console.log('Listening to server at port ', port))