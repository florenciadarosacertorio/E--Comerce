
const productInfo = () => {
    window.location = "product-info.html"
}

var categoriesArray = [];

function showCategoriesList(array){

    let htmlContentToAppend = "";
    for(let i = 0; i < array.length; i++){
        let category = array[i];

        htmlContentToAppend += `
        <div class="contenedor">
            <div class="row">
                <div class="col-3">
                    <img src="` + category.imgSrc + `" alt="` + category.description + `" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1 nombre">`+ category.name +`</h4>
                        <small class="cost"> <span class="precio"> Precio: </span>` + category.cost +  ` $</small>
                    </div>
                    <p> `+ category.description +`  </p>
                </div>
            </div>
        </div>
        `

        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
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
   showCategoriesList(array)
}


 function filtrar (array){
    let elemMin = document.getElementById("min")
    let elemMax = document.getElementById("max")
    let min = elemMin.value;
    let max = elemMax.value;
    
  return categoriesArray = (array.filter(valor => valor.cost >= min && max >= valor.cost))

   }


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){ 
   getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            categoriesArray = resultObj.data;
            //Muestro las categorías ordenadas
            showCategoriesList(categoriesArray);
        }
    });
    
    document.getElementById("AZ").addEventListener("click", function(){
        sortData("AZ",categoriesArray)
    })
    document.getElementById("ZA").addEventListener("click", function(){
        sortData("ZA", categoriesArray)
    })
    document.getElementById("relev").addEventListener("click", function(){
        sortData("Cant.", categoriesArray)
    })
    document.getElementById("filtro").addEventListener("click", function(){
        filtrar(categoriesArray)
    })

    document.getElementById("cat-list-container").addEventListener("click", productInfo)

});












