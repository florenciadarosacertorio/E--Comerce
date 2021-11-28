"use strict"



const save = () => {

  const name = document.getElementById("name");
  const nameValue = name.value;
  const age = document.getElementById("age");
  const ageValue = age.value;
  const email = document.getElementById("email");
  const emailValue = email.value;
  const phone = document.getElementById("phone");
  const phoneValue = phone.value;

  if (name && age) {
    name.value = "";
    age.value = "";
    email.value = "";
    document.getElementById("phone").value = "";
    localStorage.setItem("name1", JSON.stringify(nameValue));
    localStorage.setItem("age1", JSON.stringify(ageValue));
    localStorage.setItem("email1", JSON.stringify(emailValue));
    localStorage.setItem("phone1", JSON.stringify(phoneValue));

  } else {
    alert("Debe completar todos los campos");
  }

};
const show = () => {
  if (localStorage.getItem("name1")) {
    const name = localStorage.getItem("name1");
    const age = localStorage.getItem("age1");
    const email = localStorage.getItem("email1");
    const phone = localStorage.getItem("phone1");
    const perfil = document.getElementById("perfil")

    perfil.innerHTML +=
      `<tr>${name}</tr>
  <tr>${age}</tr>
  <tr>${email}</tr>
  <tr>${phone}</tr>`
  } else {

  }
}



//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
  show();
  document.getElementById("save").addEventListener("click", save)
  document.getElementById("save").addEventListener("click", show);




});