//porta na qual rodará o server
const PORT = 3000;
//importando o express
const express = require("express");
//importando o mongoose
const mongoose = require("mongoose");
//inicializando o método express
const app = express();

//rota dos links, onde chamamos o Schema Link e fazemos
//todo o tratamento dessa rota
const linkRouter = require('./routes/linkRoute')




//exemplo de novo link
// let link = new Link({
//   title: 'GitHub Deyvison',
//   description: "Link para github",
//   url: "https://github.com/dscsouza",
// });

//incluir um novo link no banco de dados
// link.save().then(doc=>{
//     console.log('Documento salvo')

// }).catch(err=>{
//     console.log('Houve um erro', err)
// })



//conectando
mongoose.connect("mongodb://localhost/links", { useNewUrlParser: true });

let db = mongoose.connection;
// como a conexão pode demorar algum tempo, usaremos liteners para acessar o banco

//evento que será executado após aberto o banco
db.on("error", () => {
  console.log("houve um erro");
});

//evento que será executado uma vez após aberto o banco
db.once("open", () => {
  console.log("banco carregado");
});


//aqui indicamos que vamos utilizar a rota linkRouter
app.use("/", linkRouter)



app.listen(3000, () => {
  console.log("Server running Port ", PORT);
});
