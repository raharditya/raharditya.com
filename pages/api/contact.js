const nodemailer = require("nodemailer");

function emailOutput(sender, email, msg) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins:wght@300;400;700&display=swap");

      body {
        font-family: "Poppins", sans-serif;
        text-align: center;
        margin: 0;
        box-sizing: border-box;
        padding: 1rem 0 3rem 0;
        background-color: #fcfcfd;
      }

      .text-heading-serif {
        font-family: "Playfair Display", serif;
        font-weight: 700;
        margin-bottom: 5px;
        color: #71638e;
      }

      .sub-heading {
        margin-top: 0;
        margin-bottom: 2.5rem;
        color: rgb(121, 121, 121);
      }

      .msg-container {
        width: 75%;
        max-width: 700px;
        background-color: #f7f2e7;
        margin-left: auto;
        margin-right: auto;
        border-radius: 10px;
        box-shadow: 3px 3px 6px rgba(34, 34, 34, 0.11);
        padding: 1.5rem 2rem;
        text-align: start;
      }

      .msg-container p {
        color: rgb(121, 121, 121);
      }

      .msg-container span {
        font-weight: 700;
        color: rgb(13, 71, 20);
      }

      .msg-container .msg-body {
        color: black;
        margin-top: 5px;
      }

      .reply-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        width: 120px;
        background-color: #ff8fb0;
        border-radius: 10px;
        color: white;
        margin-left: auto;
        margin-right: auto;
        margin-top: 2rem;
        text-decoration: none;
        font-weight: bold;
        font-size: 1.1rem;
        box-shadow: 3px 3px 10px rgba(68, 68, 68, 0.11);
      }

      .reply-container{
        padding-top: 2rem;
      }
    </style>
  </head>
  <body>
    <h2 class="text-heading-serif">Raharditya.com</h2>
    <p class="sub-heading">Contact Form</p>

    <div class="msg-container">
      <p>Sender: <span>${sender}</span></p>
      <p>Email: <span>${email}</span></p>
      <p style="margin-bottom: 0">Message:</p>
      <p class="msg-body">
        ${msg}
      </p>
    </div>
    
    <div class="reply-container">
      <a href="mailto:${email}" class="reply-btn">Reply</a>
    </div>
  </body>
</html>
`;
}

export default function handler(req, res) {
  // JANGAN LUPA SANITIZE!!!

  const { sender, email, msg } = req.body;

  let transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: "contact@raharditya.com",
    subject: `Contact Form: ${sender}`,
    html: emailOutput(sender, email, msg),
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
      res.status(500).json({ msg: "Email failed to send" });
    } else {
      console.log("Email sent");
      res.status(200).json({ msg: `Email sent` });
    }
  });
}
