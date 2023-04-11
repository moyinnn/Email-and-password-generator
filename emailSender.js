    var nodemailer = require('nodemailer');

    var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'osomoyin@gmail.com',
        pass: 'osomoyin19'
    }
    });

    var mailOptions = {
    from: 'osomoyin@gmail.com',
    to: 'angeldorcas@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'Did you receive it?'
    };

    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
    });