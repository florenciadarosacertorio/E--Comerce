"use strict"

const guardarDatos = () => {
    const correo = document.getElementById("correo");
    const contraseña = document.getElementById("contraseña");
    const correoValor = correo.value;
    const contraValor = contraseña.value;
    if (correoValor && contraValor) {
      correo.value = "";
      contraseña.value = "";
      localStorage.setItem("correoValor", correoValor );
      localStorage.setItem("contraValor", contraValor );
      window.location = "index.html";
    } else {
      alert("Nombre y apellido no deben ser vacíos");
    }
  };



//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    document.getElementById("boton").addEventListener("click", guardarDatos);
});