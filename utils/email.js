const nodemailer = require("nodemailer")

exports.sendEmail = ({sendTo, sub, subtext,message}) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth:{
        user:"sakshij300071@gmail.com",
        pass: "ermrqqpjbwcnjoax"
    }
  }) //end
  transporter.sendMail({
    to: "sakshisjadhav.120@gmail.com",
    // to: sendTo,
    from:sendTo,
    subject:sub,
    // text:subtext,
    html: message,
    text:subtext
  },(error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Email Send Successfully");
    }
   })
}