let resto = document.querySelector(".menuResto");

fetch("js/restaurantes.json")
.then((response) => {
return response.json();
})
.then(data => {


var idResto = localStorage.getItem("indiceCache");
console.log(idResto);

for (let y = 0; y < data.length; y++) {
    let restaurante = data[y];    
    
    if(idResto==restaurante.truck_id){
        document.getElementById("titulo_Resto").innerHTML= data[y].name;
        for (let i = 0; i < 3; i++) {
            document.querySelector('.menuResto').innerHTML += `
                <a href="resto.html" class="plato">
                <div class="imagen_platillo">
                    <img src="${data[y].resena[i].imagen_persona}" alt="" height="100">
                    <div class="precio_plato">${data[y].resena[i].puntuacion}
                        <i class="iconos">star</i>
                    </div>
                </div>
                <div class="desc_platillo">
                    <h3>${data[y].resena[i].nombre_persona}</h3>
                    <h5>${data[y].resena[i].titulo}</h5>
                    <span>${data[y].resena[i].comentario}</span>
                </div>
                </a>
            `
        }
    }
    
}
});

