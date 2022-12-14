var nodemailer = require('nodemailer');



var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tasnim.laaribi2@gmail.com',
    pass: 'ssavykclzcsvawml'
  }
});

var mailOptions = {
  from: 'tasnim.laaribi2@gmail.com',
  to: 'achrefsayadii@gmail.com',
  subject: 'salut achref',
  text: 'salut achref!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});