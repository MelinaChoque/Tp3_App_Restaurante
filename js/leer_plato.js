let resto = document.querySelector(".restaurantes");

fetch("js/restaurantes.json")
.then((response) => {
return response.json();
})
.then((data) => {
for (let i = 0; i < 9; i++) {
// almaceno en la variable restaurante el valor de i del FOR
let restaurante = data[i];

let cartaRestaurante = document.createElement("div");
cartaRestaurante.classList.add("resto");
// almaceno en la variable cartaRestaurante.id el valor de i del restaurante.truck_id
        cartaRestaurante.id = restaurante.truck_id;
        cartaRestaurante.innerHTML = /*html*/ `
        <a href="resto.html" class="plato">
            <div class="imagen_resto"><img src=${restaurante.avatar.src} alt=""></div>
            <div class="desc_resto">
            <h3>${restaurante.name}</h3>
            <h5 class="gris_txt">
            <p>${restaurante.direccion}</p>
            <p>${restaurante.horario}s</p>
            </h5>
            <div class="precio_val">
            <div class="valoracion verde_txt">
            <i class="iconos">${restaurante.puntuacion}</i>
            (72)
            </div>
            <div class="precio verde_txt">
            <i class="iconos">attach_money</i><i class="iconos">attach_money</i><i
            class="iconos gris_txt">attach_money</i>
            </div>
            </div>
            </div>
            <div class="puntuacion">${restaurante.puntuacion}</div>
            <div class="distancia"> 3KM</div>
        </a>
    `;

cartaRestaurante.addEventListener("click", function () {
let idRestauranteSeleccionado = restaurante.truck_id;
//almaceno en CACHÉ la variable indiceCache el valor de idRestauranteSeleccionado
localStorage.setItem("indiceCache", idRestauranteSeleccionado);
console.log(idRestauranteSeleccionado);
});

resto.appendChild(cartaRestaurante);
}
});

// obtengo desde la caché el valor almacenado en indiceCache
