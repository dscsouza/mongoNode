//importando os Schemas, que estão na pasta models
const Link = require("../models/Link")

//função que vai se comunicar com o BD e buscar o registro
const redirect = async(req,res)=>{
    let title = req.params.title;
    try {
        let doc = await Link.findOne({ title });
        res.redirect(doc.url);
      } catch (error) {
        res.send(error);
      }
}


const addLink = async (req, res)=>{
  let link = new Link(req.body)

  console.log(link)

  try {
    doc = await link.save()
    linkData = await allLinksData();
    res.render('index', {error:{message:"Registro incluído com sucesso"}, body:"", links:linkData})
  } catch (error) {
    res.render('index', {error, body: req.body, links:""})

    
  }

}

async function allLinksData() {
  try {
    return(await Link.find({}))
  } catch (error) {
    return (error);
  }
}

const allLinks = async (req, res)=>{
  try {
    links = await Link.find({})
    res.render('all', {links})
  } catch (error) {
    res.send(error)
  
  }

}

const deleteLinks = async (req, res)=>{
  try {
    id = req.params.id;
    del = await Link.findByIdAndDelete(id)
    linkData = await allLinksData();
    res.render('index', {error:{message:"Registro excluído com sucesso"}, body:"", links:linkData})
  } catch (error) {
    res.render('index', {error, body:"", links:(linkData)?linkData:""})
  
  }

}

const loadLink = async (req, res)=>{
  try {
    id = req.params.id;
    linkEdit = await Link.findById(id)
    linkData = await allLinksData();
    res.render('edit', {error: {message:"Efetue as alterações que desejar."}, body:linkEdit, links:linkData})
  } catch (error) {
    res.render('index', {error, body:"", links:(linkData)?linkData:""})
  
  }

}

const editLink = async(req, res)=>{
  try {
    id = req.params.id;
    link = {
        title: req.body.title, 
        description: req.body.description, 
        url: req.body.url
      };
      console.log(link)
    
    linkEdit = await Link.findByIdAndUpdate(id, link)
    linkData = await allLinksData();
    res.render('index', {error: {message: "Registro alterado com sucesso."}, body:'', links:linkData})
  } catch (error) {
    res.render('index', {error, body:"", links:(linkData)?linkData:""})
  
  }
}

module.exports = {redirect, addLink, allLinks, deleteLinks, allLinksData, editLink, loadLink}