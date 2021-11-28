"use strict"
const save = () => {
    document.getElementById("1").value = "";
};


var productInfo = {};



function showImgInfo(array) {

    let htmlContentToAppend = "";
    for (let i = 0; i < array.length; i++) {
        let imgInfo = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
        <div class="d-block mb-4 h-100">
            <img class="img-fluid img-thumbnail" src="` + imgInfo + `" alt="">
        </div>
    </div>
        `

        document.getElementById("imgProduct").innerHTML = htmlContentToAppend;
    }
}


var productComments = [];

function showComment(array) {

    let htmlContentToAppend = "";
    for (let i = 0; i < array.length; i++) {
        let comment = array[i];

        htmlContentToAppend += `
        <div class="conte">
            <div class="row">
            <div >
            <p class="desComment"> `+ comment.description + `  </p>
        </div>  
            <div>
                <p> <strong class="sComment" >Puntuación:</strong> `+ comment.score + ` estrellas </p>
            </div> 
           
            <div >
                <p>  <strong class="sComment"> Usuario: </strong>`+ comment.user + `  </p>
            </div> 

            <div>
                <p> <strong class="sComment">Fecha de publicado </strong> `+ comment.dateTime + `  </p>
            </div> 
            </div>

        </div>
        `

        document.getElementById("commentProduct").innerHTML = htmlContentToAppend;
    }
}

var productRel = {};
function showReProducts (arr) {
    let htmlContentToAppend = "";
    const array = arr.relatedProducts
    for (let value of array){
        const relProducts = productRel[value]

        htmlContentToAppend += `
        <div class="col-3 mb-4">
        <h4 class="mb-1">`+ relProducts.name +`</h4>
        <img src="` + relProducts.imgSrc + `" alt="`
        `</div>
        `
        document.getElementById("prodRela").innerHTML = htmlContentToAppend;
    }
}



//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded",function (e) {
    getJSONData(PRODUCT_INFO_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            productInfo = resultObj.data;

            let productName = document.getElementById("name");
            let productDescription = document.getElementById("description");
            let productCost = document.getElementById("cost");
            let productCurrency = document.getElementById("currency");
            let productCategory = document.getElementById("category");
            let productSoldCount = document.getElementById("soldCount");

            productName.innerHTML = productInfo.name;
            productDescription.innerHTML = productInfo.description;
            productCost.innerHTML = productInfo.cost;
            productCurrency.innerHTML = productInfo.currency;
            productCategory.innerHTML = productInfo.category
            productSoldCount.innerHTML = productInfo.soldCount;


            showImgInfo(productInfo.images);
        }
    });


    

    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            productComments = resultObj.data;
            showComment(productComments);
        }
    });
    
    getJSONData(PRODUCTS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            productRel = resultObj.data;
            showReProducts(productRel)
        }
    });

   


    document.getElementById("send").addEventListener("click", save);

});