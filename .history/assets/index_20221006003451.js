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
        imgPokemon.setAttribute('src', '/img/descarga.jpg');
        if (valueid == "") return inputVacio.textContent = "Debes ingresar un valor numerico."
        if (data == undefined) return inputVacio.textContent = "Debes ingresar un valor valido.";

        cleanFields();
        renderCard(data)
            /*nombrePokemon.textContent = data.name.toUpperCase();

            tipoPokemon.textContent = data.types
                .map((types) => {
                    return types.type.name.toUpperCase()
                })
                .join(", ");
            alturaPokemon.textContent = data.height / 10 + "Mts";
            pesoPokemon.textContent = data.weight / 10 + "Kg";
            imgPokemon.setAttribute('src', data.sprites.front_default);*/
    }

    const cleanFields = () => {
        inputVacio.textContent = "";
        nombrePokemon.textContent = "";
        alturaPokemon.textContent = "";
        imgPokemon.textContent;
    }


    const renderCard = (data) => {
        html = `<div class="card">
        <img id="img-pokemon" src="${data.sprites.front_default}" alt="Avatar" style="width:30%">
        <div class="container">
            <p>Nombre: <span class="texts" id="nombre-pokemon">${data.name.toUpperCase()}.</span></p>
            <p>Tipos: <span class="texts" id="tipo-pokemon">${data.types
                .map((types) => {
                    return types.type.name.toUpperCase()
                })
                .join(", ")}.</span></p>
            <p>Altura: <span class="texts" id="altura-pokemon">${data.height / 10 + "Mts"}s.</span>.</p>
            <p>Peso: <span class="texts" id="peso-pokemon">${data.weight / 10 + "Kg"}s.</span>.</p>
        </div>`

        caja.innerHTML = html;

    }