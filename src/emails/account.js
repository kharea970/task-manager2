//api key for send grid
//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
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email,name)=>{
    sgMail.send({
        to:email,
        from:'kharea970@gmail.com',
        subject:'Thanks For Joining In!',
        text:`Welcome to the app ${name}, Let me know how u get along with the app.`
    })
}

const sendCancellationEmail = (email,name)=>{
    sgMail.send({
        to:email,
        from:'kharea970@gmail.com',
        subject:'We are sorry to hear u go',
        text:`Dear ${name}, Let me know is there anything we could have done to make u stay with us.`
    })
}

module.exports = {
    sendWelcomeEmail,sendCancellationEmail
}
