const express = require("express");
const app = express();
const port = process.env.PORT || 3000; // Usa el puerto proporcionado por Azure o el puerto 3000 de manera local

app.get("/", (req, res) => {
    res.send("Hola, Azure");
});
app.post("/", (req, res) => {
    res.send("Post Method");
});

app.listen(port, () => {
    console.log(`La aplicación está en ejecución en el puerto ${port}`);
});
