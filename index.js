const express = require('express');
const bodyParse = require('body-parser');

const app = express();
const PORT = process.env.PORT || 300;

app.use(bodyParse.urlencoded({ extended:true }));
app.use(bodyParse.json());

app.get("/", (req,res) => {
  res.status(200).send({msg: "Hola tincode"});
});

app.get("/welcome", (req,res) => {
  res.status(200).send({msg: "bienvenido"});
});

app.listen(PORT, () => {
  console.log(`Tu server está listo en el puerto ${PORT}`)
})
