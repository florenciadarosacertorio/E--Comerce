const cart = [];

function showCart(cart){
    let htmlContentToAppend = "";
    htmlContentToAppend += `

    <div class="contenedor">
        <div class="row">
            <div class="col-3">
                <img src="` + cart.articles[0].src + `" alt="` + `" class="img-thumbnail">
            </div>
            <div class="col">
                <div class="d-flex w-100 justify-content-between">
                    <h4 class="mb-1 nombre">`+ cart.articles[0].name +`</h4>
                    <small class="cost"> <span class="precio"> Precio: </span>` + cart.articles[0].unitCost + cart.articles[0].currency + ` </small>
                </div>
                <p>  Cantidad:  `+ cant.value  + `  </p>
            </div>
        </div>
    </div>
    `

    document.getElementById("cartInfo").innerHTML = htmlContentToAppend;

}

function total (cart){
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


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", async function (e) {
    // getJSONData(CART_INFO_URL).then(function (resultObj) {
    //     if (resultObj.status === "ok") {
    //         cart = resultObj.data;
    //         showCart(cart);
    //     }
    // });
   
    const cart= (await getJSONData(CART_INFO_URL)).data
    showCart(cart)


    document.getElementById('cant').addEventListener('change', ()=> showCart(cart))
    document.getElementById('cant').addEventListener('change', ()=> total(cart))
});



