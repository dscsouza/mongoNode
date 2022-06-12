const mongoose = require('mongoose')

const linkSchema = new mongoose.Schema({
    title: { type: String, required: true }, //campo requerido do tipo string
    description: String, //campo não obrigatório
    url: { type: String, required: true }, //campo requerido do tipo string
    click: { type: Number, default: 0 }, // campo não obrigatório com valor padrão 0
  });

  module.exports = mongoose.model("Link", linkSchema);