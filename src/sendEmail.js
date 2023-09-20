import sendgrid from '@sendgrid/mail'

export default function sendEmail(email) {
  const sgMail = sendgrid;
  const API_KEY = "SG.HZDaHfSSQgS4s77w9kDQ-Q.M3wpcHY7f3JS7WRYS73-YQCPzGW7_eTZ6NW60dSXUW4";
  sgMail.setApiKey(API_KEY);
  const msg = {
    to: 'victormoralestosto@hotmail.com', 
    from: email, 
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    });

}

sendEmail('victormoralestosto@gmail.com')