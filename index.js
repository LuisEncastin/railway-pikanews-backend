const express = require('express');
const bodyParse = require('body-parser');
const mongoose = require("mongoose");
const cors = require('cors');

const app = express();

app.use(bodyParse.json({ limit: '30mb', extended: true }));
app.use(bodyParse.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// Connection URI
// const uri = 'mongodb+srv://luisencastin:Rayuela1@cluster0.whup5ue.mongodb.net/?retryWrites=true&w=majority';
const uri = 'mongodb://mongo:Rc5NGcCl3ukneTx6at0a@containers-us-west-122.railway.app:7785';
const PORT = process.env.PORT || 3000;

//Connection to database
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

//Schema
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  email: String
});

const User = mongoose.model('User', UserSchema);

//Peticiones
app.get("/", (req,res) => {
  res.status(200).send({msg: "Hola tincode"});
});

app.get("/welcome", (req,res) => {
  res.status(200).send({msg: "bienvenido"});
});

app.post("/user", function (req, res) {
  const user = new User({
      name: req.body.name,
      email: req.body.email,
  });
  user.save(function (err) {
      if (err) {
          res.redirect("/error");
      } else {
          res.redirect("/thank-you");
      }
  });
});
