const mongoose = require("mongoose")

var Schema = mongoose.Schema

var libroModel = new Schema(
    {
        titulo:{type:String},
        genero:{type:String},
        autor:{type:String},
        leer:{type:Boolean, default:false}
    }
);
 module.exports= mongoose.model('Libro', libroModel)