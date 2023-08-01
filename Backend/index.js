const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const Adduser = require("./models/user");

require('dotenv').config();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(
    process.env.URL ,
    { useUnifiedTopology: true, useNewUrlParser: true }
  ).then(() => {
    app.listen(process.env.DEV_PORT);
    console.log(`Server Lisetn in ${process.env.DEV_PORT} PORT`);
    console.log("DB connected.");
  })
  .catch((err) => {
    console.log("Error will connect to DB : ", err);
  });


  app.post("/api/insert_user",async (req,res)=>{

    const { first_name, last_name, personal_number,wing,unit_number,rank, iscommander } = req.body;
    let existingUserID = await Adduser.findOne({ personal_number });

    if (existingUserID) {
      return res.status(400).json({ message: "User already exists !" });
    }
    const newUser = new Adduser({
     first_name,
     last_name,
     personal_number,
     wing,
     rank,
     unit_number,
     iscommander
    });
    await newUser.save();
    return res.status(200).json({ message: "Add User Successfully" });


  })

app.post("/api/insert_user_to_db",async (req,es)=>{
console.log("inside function")

})

