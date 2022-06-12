const express = require("express");
//inicializamos o router, pois como as rotas estão em arquivos separados
//precisamos dele
//caso estivéssemos no index, ou app, usaríamos app
//que no nosso caso é cont app = express()
const router = express.Router();


const linkController = require("../controllers/linkController")



router.get("/", (req, res) => {
  res.send("Servidor Funcionando...");
});

router.get("/:title", linkController.redirect);


module.exports = router

