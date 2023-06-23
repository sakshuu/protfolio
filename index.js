const express = require("express")
require("dotenv").config({path: "./.env"})
const cors = require("cors")
const connectDb = require("./config/db")
const mongoose = require("mongoose")

const app = express()
connectDb()

// app.use(log)
app.use(express.json())
app.use(cors(
     {
     credentials: true,
     origin:(o,cb) => {
         const allowed = [
            //  "http://localhost:3000"
   "https://wild-jade-armadillo-slip.cyclic.app/api/",
         ]
         if(allowed.indexOf(o) !== -1 || !o){
             cb(null, true)
         } else {
             cb("blocked by cors")
         }
     }
 }))

app.use("/api/contact", require("./routes/routesContact"))


app.use("*", (req,res) => {
    res.sendFile(path.join(__dirname,"build/index.html"))
// res.status(404).json({
//     message: "404 :Resource You Are Looking For Is Not Available"
// })
})


const PORT = process.env.PORT || 5000

mongoose.connection.once("open", () => {
    app.listen(PORT, console.log(`SERVER RUNNING http://localhost:${PORT}`))
    console.log("MONGO CONNECTED")
})


