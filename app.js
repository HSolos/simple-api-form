const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/api/persona", (req, res) => {
    const data = {
        dni: "12345678",
        nombre: "Rosvel",
        apellido: "Pérez",
        fecha_nacimiento: "10-05-2010",
        direccion: "Calle Principal 123",
        ciudad: "Una Ciudad",
        codigo_postal: "12345",
        pais: "Peru",
    };

    res.send(data);
});

app.listen(port, () => {
    console.log(`La aplicación está en ejecución en el puerto ${port}`);
});
