// Llamada a la API de ASIX al recargar la página

try {
    fetch("http://localhost/datos")
        .then(response => response.json())
        .then(data => console.log(data));

} catch (error) {
    console.log("Error en la petición de datos: ", error.message);
}

let humedad = document.getElementById("humedad");
let datos = "Funciona";
humedad.textContent = datos; //data