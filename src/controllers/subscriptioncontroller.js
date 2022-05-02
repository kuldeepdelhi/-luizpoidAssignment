
const nodemailer = require('nodemailer')

const isValid = function (value) {
    if (typeof value === 'undefined' || value === null) return false
    if (typeof value === 'string' && value.trim().length === 0) return false
    return true;
}

const SubscribeEmail = async function (req, res) {
    try {
        const requestBody = req.body

        let { Email} = requestBody; 
        let Transporter = nodemailer.createTransport({
            Host: "smtp.ethereal.email",
            Port: 587,
            Secure: false,
            Auth: {
              user: "j62kvcwhkma22wil@ethereal.email",
              pass: "MrvqfhT5TgSQbVCxnt",
            },
          });
        
         
          let info = await Transporter.sendMail({
            from: '"Zomato" <website@example.com>', 
            to: `${Email}`, 
            subject: "Hi ✔", 
            text: "Hi?", 
            html: "<b>Hi?</b>", 
          });
        
          console.log("Message sent: %s", info.messageId);
         
          console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

          res.send('Email sent!')
    }
    catch (err) {
        res.status(500).send({ status: false, message: err.message })
    }
}

module.exports = { SubscribeEmail  }