const { Usercontact } = require("../controllers/controllersContact")

const router = require("express").Router()
router


.post("/contact",Usercontact)


module.exports = router