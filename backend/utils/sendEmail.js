const nodemailer = require("nodemailer");
const sendGridTransport = require("nodemailer-sendgrid-transport");

const sendEmail = async (options) => {
  let transporter;
  if (process.env.NODE_ENV === "production") {
    transporter = nodemailer.createTransport(
      sendGridTransport({
        auth: {
          api_key: process.env.SENDGRID_API_KEY,
        },
      })
    );
  } else {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });
  }

  const message = {
    from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
    to: options.email,
    subject: options.subject,
    text: options.message,
    html: options.html,
  };

  const info = await transporter.sendMail(message);

  console.log("Message sent: %s", info.messageId);
};

module.exports = sendEmail;
