"use strict"
const cart = [];

function showCart(cart){
    let htmlContentToAppend = "";
    htmlContentToAppend += `

    <div class="carrito">
        <div class="row">
            <div class="col-3">
                <img src="` + cart.articles[0].src + `" alt="` + `" class="img-thumbnail">
            </div>
            <div class="col">
                <div class="d-flex w-100 justify-content-between">
                    <h4 class="mb-1 nombre">`+ cart.articles[0].name +`</h4>
                    <small class="cost"> <span class="precio"> Precio unitario: </span>` + cart.articles[0].unitCost + cart.articles[0].currency + ` </small>
                </div>
                <p>  Cantidad:  `+ cant.value  + `  </p>
            </div>
        </div>
    </div>
    <hr>
    `

    document.getElementById("cartInfo").innerHTML = htmlContentToAppend;

}

function subtotal (cart){
    var cant = document.getElementById('cant').value;

    let htmlContentToAppend = '';

    htmlContentToAppend = 
    `<div >
    <div >`
        + cant*cart.articles[0].unitCost +
        `</div>
    </div>`

    document.getElementById('subtotal').innerHTML = htmlContentToAppend
}

function enviop (){
    var subtotal = document.getElementById('subtotal').textContent;

    let htmlContentToAppend = '';

        htmlContentToAppend = 
        `<div >
        <div >`
            + subtotal*0.15  +
            `</div>
        </div>`
    
        document.getElementById('envio').innerHTML = htmlContentToAppend
}
function envioe (){
    var subtotal = document.getElementById('subtotal').textContent;

    let htmlContentToAppend = '';

        htmlContentToAppend = 
        `<div >
        <div >`
            + parseInt(subtotal*0.07)   +
            `</div>
        </div>`
    
        document.getElementById('envio').innerHTML = htmlContentToAppend
}
function envios (){
    var subtotal = document.getElementById('subtotal').textContent;

    let htmlContentToAppend = '';

        htmlContentToAppend = 
        `<div >
        <div >`
            + subtotal*0.05  +
            `</div>
        </div>`
    
        document.getElementById('envio').innerHTML = htmlContentToAppend
}




function total (){
    var subtotal = document.getElementById('subtotal').textContent;
    var envio = document.getElementById("envio").textContent;


    let htmlContentToAppend = '';

    htmlContentToAppend = 
    `<div >
    <div >`
    + `${parseInt(subtotal)+parseInt(envio)}` +
    `</div>
    </div>`

    document.getElementById('total').innerHTML = htmlContentToAppend
}



//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", async function (e) {
   
    const cart= (await getJSONData(CART_INFO_URL)).data
    showCart(cart)


    document.getElementById('cant').addEventListener('change', ()=> showCart(cart))
    document.getElementById('cant').addEventListener('change', ()=> subtotal(cart))
    document.getElementById('cant').addEventListener('change', ()=> envios())
    document.getElementById('cant').addEventListener('change', ()=> total())
    // document.getElementById("comprar").addEventListener("click", ()=> alert("Compra realizada con éxito") )

});



