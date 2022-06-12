//importando os Schemas, que estão na pasta models
const Link = require("../models/Link")

//função que vai se comunicar com o BD e buscar o registro
const redirect = async(req,res)=>{
    let title = req.params.title;
    try {
        let doc = await Link.findOne({ title });
        res.redirect(doc.url);
      } catch (error) {
        res.send("houve um erro");
      }
}

module.exports = {redirect}