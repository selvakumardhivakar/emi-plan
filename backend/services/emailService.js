const sgMail = require("@sendgrid/mail");

const sender = "selvakumardhivakar@gmail.com";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeMail = ({ email, name }) => {
  sgMail.send({
    to: email,
    from: sender,
    subject: "Thanks for joining with us!",
    text: `We are really happy to welcome you ${name}. You can use our services from now on.
            Thank You! `,
  });
};

const sendCancelationMail = ({ email, name }) => {
  sgMail.send({
    to: email,
    from: sender,
    subject: "Sorry to see you go!",
    text: `Goodbye ${name}. I hope to see you back in our application.`,
  });
};

module.exports = {
  sendWelcomeMail,
  sendCancelationMail,
};
