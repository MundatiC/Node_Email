const sendMail = require('./sendMail');
require('dotenv').config();

async function sendEmail() {
  const message = {
    from: process.env.EMAIL_USER,
    to: 'jonathan.mwaniki@thejitu.com',
    subject: 'Weekly Report',
    html: '<h1>Hello Jonathan,</h1><h2><i>Please find attached my weekly report.</i><h2/>\n<h3>My jitu account did not have any option of using an app password so I opted to use my personal email<h3/>',
    attachments: [
      {
        filename: 'report.docx',
        path: './report.docx'
      }
    ]
  };

  await sendMail(message);
}

module.exports = sendEmail;
