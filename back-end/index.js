const express = require('express');
const app = express();
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require('cors');
require("./config/db.js")
app.use(express.json())
app.use(cors())
app.use(bodyParser.json());
const sendEmail = require("./sendEmail.js") ;

// ................... sigup .................//

const UserSchema = require("./Modal/Signup")


app.post("/singup", async (req, res) => {
    let parcel = req.body.email
    console.log(parcel);
    let checkresult = await UserSchema.findOne({ email: parcel })
    if (checkresult) {
        res.send({ result: "Email Already exist" })
    } else {
        const userdata = new UserSchema(req.body)
        const result = await userdata.save()
        res.send(result)
    }
})

app.post("/login", async(req,res)=>{

    let {logInEmail,loginPassword} = req.body
   
    // res.send(req.body);
    if(!logInEmail || !loginPassword){
        return res.send({result: "E-mail and password are required"})
    }
    let checkresult = await UserSchema.findOne({ email: logInEmail })
    if(!checkresult){
        return res.send({result: "Invalid credentials"})
    }
    const isMatched = await checkresult.comparePassword(loginPassword);
    if (!isMatched){
         
        return res.send({result: "Invalid credentials password"})
      }
      res.send({result: "Login Successfully", status: logInEmail})
})


// ........................ Reservation Data ..........................//
app.post("/send_Reservation_Data", async(req, res)=>{
    let {dropOff,date,time,service,passengerSelect,firstName,lastName,email,phone,returnDate,returnTime,pickUp} = req.body
    try {
        
        const send_to = email;
        const sent_from = process.env.SEND_From;
        const reply_to = email;
        const subject = "Thank You Message From NodeCourse";
        const message = `
        <div style="font-size: .8rem; margin: 0 30px">
                <p>FirstName: <b>${firstName}</b></p>
                <p>Phone: <b>${phone}</b></p>
                <p>LastName: <i>${lastName}</i></p>
                <p>PICK UP LOCATION: <b>${pickUp}</b></p>
                <p>DROP OFF LOCATION: <b>${dropOff}</b></p>
                <p>Pickup Date: <b>${date}</b></p>
                <p>Pickup Time: <b>${time}</b></p>
                <p>TYPE OF SERVICE: <b>${service}</b></p>
                <p>PASSENGERS: <b>${passengerSelect}</b></p>
                <p>RETURN DATE: <b>${returnDate}</b></p>
                <p>RETURN TIME: <b>${returnTime}</b></p>
              </div>
        `;
        await sendEmail(subject, message, send_to, sent_from, reply_to);
        res.send({ success: true, message: "Email Sent" });
      } catch (error) {
        res.send(error.message);
      }
})

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`App is running on port ${port}`);
})