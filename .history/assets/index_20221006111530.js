    var nombrePokemon = document.getElementById('nombre-pokemon');
    var tipoPokemon = document.getElementById('tipo-pokemon');
    var alturaPokemon = document.getElementById('altura-pokemon');
    var inputVacio = document.getElementById('input-vacio');
    var imgPokemon = document.getElementById("img-pokemon");
    var pesoPokemon = document.getElementById("peso-pokemon");
    const baseURL = "https://pokeapi.co/api/v2/pokemon/";
    const caja = document.querySelector("#caja");
    const getPokemon = async(pokemon) => {
        const data = await fetch(baseURL + pokemon)
            .then(
                (res) => res.json()
            ).catch(
                (error) => console.log(error)
            );
        return data
    }

    const buscarPokemon = async() => {
        let valueid = document.getElementById('value-id').value;
        data = await getPokemon(valueid)
        if (valueid == "") {
            cardEmpty()
            return inputVacio.textContent = "Debes ingresar un valor numerico."
        }
        if (data == undefined) return inputVacio.textContent = "Debes ingresar un valor valido.";

        console.log(data)

        renderCard(data)
    }

    const cardEmpty = (data) => {
        caja.innerHTML = "";
    }

    const renderCard = (data) => {
        inputVacio.textContent = "";
        html = `<div class="card">
        <img id="img-pokemon" src="${data.sprites.other.home.front_default}" alt="Avatar" style="width:200px">
        <div class="container">
            <p>Nombre: <span class="texts" id="nombre-pokemon">${data.name.toUpperCase()}.</span></p>
            <p>Tipos: <span class="texts" id="tipo-pokemon">${data.types
                .map((types) => {
                    return types.type.name.toUpperCase()
                })
                .join(", ")}.</span></p>
            <p>Altura: <span class="texts" id="altura-pokemon">${data.height / 10 + "Mts"}.</span></p>
            <p>Peso: <span class="texts" id="peso-pokemon">${data.weight / 10 + "Kg"}s.</span></p>
        </div>`

        caja.innerHTML = html;

    }