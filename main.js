// Llamada a la API de ASIX al recargar la página

let humedad = document.getElementById("humedad");
let error = document.getElementById("error");
let datos = "Funciona"; // Variable de prueba


fetch("http://localhost/datos")
    .then(response => {
        if (!response.ok) {
            throw new Error("Error en la petición de datos: ", response.status);
        }
        return response.json();
    })
    .then(data => {
        humedad.textContent = data.humedad;
    })

    .catch (err => {
        console.log("Error en la petición de datos: ", err.message);
        error.textContent = `Error en la petición de datos: ${err.message}`;
    });

// humedad.textContent = datos;