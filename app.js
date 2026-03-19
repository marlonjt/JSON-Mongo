//  Conexión con express and mongoose
const express = require("express");
const mongoose = require("mongoose");

const app = express();

//Conexión con mongo db
mongoose.connect("mongodb://localhost/libroAPI");
mongoose.connection
  .once("open", () => console.log("Conectado a MongoDB"))
  .on("error", (error) => console.log("Error de conexión:", error));

//Model y puerto para API
const Libro = require("./models/libroModel");
const bookRouter = express.Router();
const port = process.env.PORT || 3000;

//Ruta para la api
bookRouter.route("/libro").get(async (req, res) => {
  try {
    const libros = await Libro.find();
    res.json(libros);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.use("/api", bookRouter);

app.get("/", (req, res) => {
  res.send("API de Libros - GET /api/libro");
});

//puerto de conexión
app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});
