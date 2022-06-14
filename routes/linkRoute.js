const express = require("express");
//inicializamos o router, pois como as rotas estão em arquivos separados
//precisamos dele
//caso estivéssemos no index, ou app, usaríamos app
//que no nosso caso é cont app = express()
const router = express.Router();

const methodOverride = require('method-override')



const linkController = require("../controllers/linkController")

router.use(methodOverride('_method'))

router.get("/all", linkController.allLinks)

router.get("/:title", linkController.redirect);

router.post("/",express.urlencoded({extended:true}), linkController.addLink)

router.get("/", async (req, res) => {
  //aqui indicamos qual arquivo será renderizado ao entrar na rota principal
  //não é necessário especificar o caminho, pois isso já foi setado
  //no index.js, com o app.set....
  linkData = await linkController.allLinksData();
  res.render('index', {error:false, body:{}, links: linkData })

});

router.delete("/del/:id", express.urlencoded({extended:true}), linkController.deleteLinks)

router.get("/edit/:id", linkController.loadLink)

router.post("/edit/:id", express.urlencoded({extended:true}), linkController.editLink)

module.exports = router

