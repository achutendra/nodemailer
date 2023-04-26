const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { dirname } = require('path');
const nodemailer = require('nodemailer');
const sendMail = require('./nodemailer');
const env = require('dotenv').config();


const app = express();


//body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



app.get('/', (req, res) => {
    res.send("Hello");
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname + '/contact.html'));
});

app.post('/contact', (req, res) => {

    const { from, to, country, subject} = req.body;
    sendMail(from, to, country, subject, function(err, data){
        if(err){
            res.status(500).json({message: 'Internal Error'});
        } else{
            res.json({ message: 'Email'});
        }
    })
    res.json({message: 'Message Recieved'});
});




const PORT =  process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("You are listening on PORT " + PORT);
});