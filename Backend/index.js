let express=require("express")
const { connection } = require("./db")
const { userRouter } = require("./Route/user.routes")
const { carRouter } = require("./Route/car.routes")
const { auth } = require("./Middleware/auth.middleware")
let cors=require("cors")
const { enventoryRouter } = require("./Route/enventory.routes")
const { oemRouter } = require("./Route/oem.route")
let app=express()
require("dotenv").config()
app.use(cors())
app.use(express.json())
app.use("/users",userRouter)
app.use(auth)
app.use("/car",carRouter)
app.use("/enventory",enventoryRouter)
app.use("/oem",oemRouter)
//Server connection
app.listen(process.env.port,async()=>{
    try{
await connection
console.log("Connected to DB")
    }catch{
        console.log(err)
        console.log("Not Connected To DB")
    }
    console.log("Server is running")
})