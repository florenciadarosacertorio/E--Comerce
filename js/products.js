const showList = (productos) => {
    const infoBasica = document.createElement("ul")
    for (let product of productos){
        const li_product = document.createElement("li");
        li_product.appendChild(document.createTextNode(`${product.name} ${product.description} ${product.cost}`))
        infoBasica.appendChild(li_product);
    }
   document.body.appendChild(infoBasica)

}


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            showList(resultObj.data);
            console.log({
                productos: resultObj.data,
            });
        }
    });
});


//categoriesArray = resultObj.data;
            //Muestro las categorías ordenadas
            //showCategoriesList(categoriesArray);
    