let platillo=document.querySelector(".menuResto")
fetch("js/restaurantes.json")

.then(response => {
    return response.json()
})


.then(data =>{

    var idResto = localStorage.getItem("indiceCache");
    console.log(idResto);
    for (let y = 0; y < data.length; y++) {
        let restaurante = data[y];    
        
        if(idResto==restaurante.truck_id){
            document.getElementById("titulo_Resto").innerHTML=data[y].name;
            for (let i = 0; i < 3; i++) {
                console.log(data[y].platos[i].src)
                document.querySelector('.menuResto').innerHTML += `
                <a href="#" class="plato">
                    <div class="imagen_platillo">
                        <img src="${data[y].platos[i].src}" alt="" height="100">
                        <div class="precio_plato">$${data[y].platos[i].precio}</div>
                    </div>
                    <div class="desc_platillo">
                        <h3>${data[y].platos[i].titulo}</h3>
                        <span>${data[y].platos[i].comentario}</span>
                    </div>
                </a>
                `
            }
        }
    }

})
