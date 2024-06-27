let resto = document.querySelector(".mainResto");

fetch("js/restaurantes.json")
.then((response) => {
return response.json();
})
.then(data => {


var idResto = localStorage.getItem("indiceCache");
console.log(idResto);

for (let i = 0; i < 9; i++) {
// almaceno en la variable restaurante el valor de i del FOR
    let restaurante = data[i];    
    if(idResto==restaurante.truck_id){
        
        let cartaRestaurante = document.createElement("div");
        cartaRestaurante.classList.add("resto");
            resto.innerHTML = /*html*/ `
                
                <section class="linkResto">
                    <div class="picResto">
                        <img src="img/restaurante.jpg" alt="">
                    </div>
                    <div class="nameResto">
                        <div class="vaina">
                            <h2>${restaurante.name}</h2>
                            <h5 class="gris_txt">${restaurante.direccion}</h5>
                        </div>
                        <div class="precio verde_txt">
                            <i class="iconos verde_text">attach_money</i>
                            <i class="iconos verde_text">attach_money</i>
                            <i class="iconos gris_txt">attach_money</i>
                        </div>
                    </div>
                    <div class="puntoResto">${restaurante.puntuacion}</div>
                </section>

                <section class="descResto ">
                    <ul class="datos">
                        <li class="btn-cat">
                            <i class="iconos f28">place</i>1.5KM
                        </li> 
                        <li class="btn-cat">
                            <i class="iconos f28">timer</i>12:00HS
                        </li> 
                        <li class="btn-cat">
                            <i class="iconos f28">delivery_dining</i>Delivery
                        </li> 

                    </ul>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, labore eius. In ratione, sed corporis reprehenderit expedita obcaecati nulla fuga. Aliquam quam assumenda hic repellat cupiditate iure sit eaque suscipit!
                    </p>
                </section>
    

            `;
        }
    }
});
