//Conectamos con el json
fetch("js/restaurantes.json")

.then(response => {
    return response.json()
})

.then(data =>{
    
    for (let i = 0; i < data.length; i++) {
        let index_resto = data[i];
        let estrellas = ""

        let guardoId = i
        for (let x = 1; x < 6; x++) {
            if(data[i].puntuacion >= x){
                estrellas += 'star '
            }else if(data[i].puntuacion < x && data[i].puntuacion >= x-0.5){
                estrellas += 'star_half '
            }else{
                estrellas += '<i class="iconos gris_txt">star </i> '
            }
        }
        let restaurante = document.querySelector(".resto");

        document.querySelector('.restaurantes').innerHTML += `
        <a class="resto" href="#">
            <div class="imagen_resto" ><img src="${data[i].avatar.src}" alt=""></div>
            <div class="desc_resto">
                <h3>${data[i].name}</h3>
                
                <h5 class="gris_txt"><p>${data[i].direccion}</p>
                <p>${data[i].horario}</p></h5>  
                <div class="precio_val">
                    <div class="valoracion">
                        <i class="iconos verde_txt">${estrellas}</i>

                    </div>
                    <div class="precio">
                        <i class="iconos verde_text">attach_money</i>
                        <i class="iconos verde_text">attach_money</i>
                        <i class="iconos">attach_money</i>
                    </div>
                </div>
            </div>
            <div class="puntuacion f20">${data[i].puntuacion}</div>
            <div class="distancia">${data[i].rango}km</div>
        </a> 
        `
    index_resto.addEventListener("click",function(){
        let idRestaurante = data.truck_id;
        localStorage.setItem("indiceCache",idRestaurante);
        console.log(idRestaurante);
    })
    
    }
    resto.appendChild(restaurante);
})
console.log(localStorage.getItem("indiceCache"));
