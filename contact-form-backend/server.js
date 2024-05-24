const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/contact', (req, res) => {
  const { name, email, number, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'ahsan.siddiqui.sm@gmail.com', 
      pass: 'Hotmail@99'   
    }
  });

  const mailOptions = {
    from: email,
    to: 'ahsan.siddiqui.sm@gmail.com', 
    subject: `Contact Form Submission: ${subject}`,
    text: `You have a new message from ${name} (${email}, ${number}):\n\n${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
