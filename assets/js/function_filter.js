function buscar()  {
    let numberRooms = document.querySelector("#rooms").value
    console.log(rangeMin.value)
    console.log(rangeMax.value)
    if (numberRooms == ""){
        alert("Debes indicar cantidad de habitaciones")
    }
    else if (parseInt(rangeMin.value) > parseInt(rangeMax.value)){
        alert('El valor "Desde" no puede ser superior al valor "Hasta"')
    }
    else{
        mostrarPropiedades(numberRooms)
    }
}

function mostrar() {
    mostrarPropiedades()
    rangeMin.value = 0
    rangeMinValue.value = 0
    rangeMax.value = 500
    rangeMaxValue.value = 500
}

const mostrarPropiedades = (rooms = "") => {    
    let home = ""
    let cantidad = 0
    for (propiedad of propiedades){
        if ((propiedad.rooms == rooms && propiedad.m >= rangeMin.value && propiedad.m <= rangeMax.value) || (rooms == "")){
            home += 
                `<div class="card">
                    <img src="${propiedad.src}" alt="${propiedad.name}">
                    <h3>${propiedad.name}</h5>
                    <p>Cuartos: ${propiedad.rooms}</p>
                    <p>Metros cuadrados: ${propiedad.m}</p>
                    <p>${propiedad.description}</p>
                    <button>Ver más</button>    
                </div>`
            cantidad ++
        }
    }
    cards.innerHTML = home
    coincidencias.innerHTML = cantidad
}

mostrarPropiedades()