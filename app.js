const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const data = [
    {
        dni: "12345678",
        nombre: "Rosvel",
        apellido: "Pérez",
        fecha_nacimiento: "10-05-2010",
        direccion: "Calle Principal 123",
        ciudad: "Una Ciudad",
        codigo_postal: "12345",
        pais: "Peru",
    },
    {
        dni: "87654321",
        nombre: "María",
        apellido: "López",
        fecha_nacimiento: "10-05-2005",
        direccion: "Avenida Secundaria 456",
        ciudad: "Otra Ciudad",
        codigo_postal: "54321",
        pais: "Peru",
    },
];
app.get("/", (req, res) => {
    res.status(200).send("App");
});
//
app.get("/api/personas", (req, res) => {
    res.status(200).json(data);
});
//
app.get("/api/persona/:dni", (req, res) => {
    const dniBuscado = req.params.dni;
    const personaEncontrada = data.find(
        (persona) => persona.dni === dniBuscado
    );

    if (!personaEncontrada) {
        res.status(404).json({ mensaje: "Persona no encontrada" });
    } else {
        res.status(200).json(personaEncontrada);
    }
});

app.listen(port, () => {
    console.log(`La aplicación está en ejecución en el puerto ${port}`);
});
