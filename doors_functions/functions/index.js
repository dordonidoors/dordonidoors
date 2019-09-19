const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true});
const rp = require('request-promise');

admin.initializeApp();

/**
* We are using gmail to send emails
*/
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'dordonidoors@gmail.com',
    pass: 'vwgaxswnodajsjgq'
  }
});

exports.sendMail = functions.https.onRequest((req, res) => (
  cors(req, res, () => {
    // getting destination by query string
    const name = req.query.name;
    const email = req.query.email;
    const message = req.query.message;

    // need to validate values from query
    if (name && email && message) {
      var confirmationEmail = {
        from: 'Dordoni Doors <dordonidoors@gmail.com',
        to: email,
        subject: 'Thank you for contacting Dordoni Doors!',
        html: `
          <div>
            <h1>Hello ${name}!</h1>
            <p>
              We recently received a message from you through our website.
              <br/>
              Here was your message:
              <div>
                <i>${message}</i>
              </div>
              <br />
              <br />
              We will contact you as soon as possible.
              <br />
              <br />
              Thank you!
              <br />
              <br />
              - Dordoni Doors
            </p>
          </div>
        `
      };

      var emailToMyself = {
        from: 'Dordoni Doors <dordonidoors@gmail.com',
        to: 'dordonidoors@gmail.com',
        subject: `An inquiry from ${name} - ${email}`,
        html: `
          <div>
            <h1>Hello Marty</h1>
            <p>
              You've received an inquiry from your website from ${name} - ${email}. Here is the message.

              <div>
                <i>${message}</i>
              </div>
            </p>
          </div>
        `
      }

      // send email to potential customer
      var result = transporter.sendMail(confirmationEmail, (err, info) => {
        if (err) {
          return false;
        } else {
          return true;
        }
      });

      // send message to myself
      return transporter.sendMail(emailToMyself, (err, info) => {
        if (err) {
          return res.send({message: 'error', error: err});
        }
        return res.send({message: 'success'});
      });
    } else {
      return {message: 'invalid query'};
    }
  })
));

exports.validateRecaptcha = functions.https.onRequest((req, res) => (
  cors(req, res, () => {
    const validationEndpoint = 'https://recaptcha.google.com/recaptcha/api/siteverify';
    const secret = '6LecI7cUAAAAANF4iz-O0TkKHNyp8bTYTUVWt7Ej';
    const token = req.query.token;

    rp({
      uri: validationEndpoint,
      method: 'POST',
      formData: {
        secret: secret,
        response: token
      },
      json: true
    })
    .then(response => {
      return res.send( success: response.success);
    })
    .catch(response => {
      return res.send({ error: response });
    })
  })
));
