const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: 'user@gmail.com',
        pass: 'password'
    }
});

const sendMail = (from, to, country, subject) => {

    const options = {
        from: from,
        to: to,
        subject: country,
        text: subject
    }
    
    
    transporter.sendMail(options, function(err, options){
        if(err){
            return console.log(err);
            
        }
        console.log("Message sent: %s", options.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    
        // Preview only available when sending through an Ethereal account
        // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    });
}

module.exports = sendMail;