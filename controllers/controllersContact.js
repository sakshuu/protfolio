const { sendEmail } = require("../utils/email")
const asyncHandler = require("express-async-handler")
const Contact = require("../models/modelsModels")

exports.Usercontact = asyncHandler (async (req,res) => {
    const {name,email,subject,message} = req.body
    if (!name || !email || !subject || !message) {
        return res.status(400).json({
            message: "All Felids Required"
        })
    }
    await Contact.create({
       ...req.body,
    })
    sendEmail({
        sendTo:email,
        name:name,
        sub:subject,
        subtext:message
    })
    res.json({
        message: "Employee Created Successfully"
    }) 
})
