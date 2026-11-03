let boton = document.getElementById("verificar");

boton.addEventListener("click", function() 
{
    let edadTexto = document.getElementById("edad").value;
    let edad = Number(edadTexto);

    if (edadTexto.trim() === "") {
        alert("El campo no puede estar vacío.");
    } else if (isNaN(edad) || edad < 0) {
        alert("Ingresa un número válido mayor o igual a cero.");
    } 
    else if (edad >= 18) {
        alert("Eres mayor de edad");
    } else {
        alert("Eres menor de edad");
    }

});
