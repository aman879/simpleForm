const express = require("express");
const bodyParser = require("body-parser")
const db = require('./firebase');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

app.post('/submit', async(req, res) => {
    const {name, email, message}  = req.body;
    res.status(400).send("submitting");
    if (!name || !email || !message) {
        return res.status(400).send("Name, email, or message missing");
    }
    try {
        await db.collection('users').add({
            name,
            email,
            message
        });
        res.status(200).send("Form submited succesfully");
    } catch(error) {
        console.log(error)
        res.status(400).send("Something went wrong");
    }
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });