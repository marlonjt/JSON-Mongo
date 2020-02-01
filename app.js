const express = require('express');

const mongoose=require('mongoose');
const app = express();

mongoose.connect("mongodb://localhost/libroAPI",{ useUnifiedTopology: true ,useNewUrlParser:true});
module.exports=mongoose;
mongoose.connection
.once("open",()=>console.log("Connected"))
.on("error",error=>{
    console.log("Your Error",error);
});

const bookRouter=express.Router();

const port = process.env.PORT || 3000;

const Libro=require('./models/libroModel')

bookRouter.route("/libro")
.get((req,res)=>{
    Libro.find((err,libros)=>{
        if(err){
            res.send(err);
        }else{
            return res.json(libros);

        }
        });

});

app.use('/api', bookRouter);

app.get('/',(req,res)=>{
    res.send('clase api');
});
app.listen(port,()=>{
    console.log(`Puerto ${port}`);
})

