"use strict"
const productInfo = () => {
    window.location = "product-info.html"
}

var productsArray = [];

function showProductsList(array){

    let htmlContentToAppend = "";
    for(let i = 0; i < array.length; i++){
        let products = array[i];
       
        htmlContentToAppend += `
        <a  class="list-group-item list-group-item-action">
        <div class="row">
                    <div class="col-3">
                        <img src="` + products.imgSrc + `" alt="` + products.description + `" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+ products.name +`</h4>
                            <small class="text-muted">` + products.cost + ` artículos</small>
                        </div>
                        <p class="mb-1">` + products.description + `</p>
                    </div>
                </div>
         </a>
        `

        document.getElementById("prod").innerHTML = htmlContentToAppend;
    }
}

let az = "AZ"
let za = "ZA"
let cant = "Cant."

function sortData(criterio,array){
   let result = [];
   if (criterio === az){
      result = array.sort (function (a, b){
       if ( a.cost > b.cost ){ return -1; }
       if ( a.cost < b.cost ){ return 1; }
       return 0;
      })
   }
   else if (criterio === za){
       result = array.sort(function (a,b){
           if ( a.cost > b.cost ){ return 1; }
           if ( a.cost < b.cost ){ return -1; }
           return 0;
       })
   }else if (criterio === cant){
       result = array.sort(function(a, b) {
           let aCount = parseInt(a.soldCount);
           let bCount = parseInt(b.soldCount);

           if ( aCount > bCount ){ return 1; }
           if ( aCount < bCount ){ return -1; }
           return 0;
       });
   }
   showProductsList(array)
}


 function filtrar (array){
    let elemMin = document.getElementById("min")
    let elemMax = document.getElementById("max")
    let min = elemMin.value;
    let max = elemMax.value;
    
  return productsArray = (array.filter(valor => valor.cost >= min && max >= valor.cost))

   }


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){ 
   getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            productsArray = resultObj.data;
            //Muestro las categorías ordenadas
            showProductsList(productsArray);
        }
    });
    
    document.getElementById("AZ").addEventListener("click", function(){
        sortData("AZ",productsArray)
    })
    document.getElementById("ZA").addEventListener("click", function(){
        sortData("ZA", productsArray)
    })
    document.getElementById("relev").addEventListener("click", function(){
        sortData("Cant.", productsArray)
    })
    document.getElementById("filtro").addEventListener("click", function(){
        filtrar(productsArray)
    })

    document.getElementById("prod").addEventListener("click", productInfo)

});












