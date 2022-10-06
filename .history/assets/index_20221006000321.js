    var nombrePokemon = document.getElementById('nombre-pokemon');
    var tipoPokemon = document.getElementById('tipo-pokemon');
    var alturaPokemon = document.getElementById('altura-pokemon');
    var inputVacio = document.getElementById('input-vacio');
    var imgPokemon = document.getElementById("img-pokemon");
    var pesoPokemon = document.getElementById("peso-pokemon");
    const baseURL = "https://pokeapi.co/api/v2/pokemon/";

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
        imgPokemon.setAttribute('src', '/img/descarga (4).jpg');
        if (valueid == "") return inputVacio.textContent = "Debes ingresar un valor numerico."
        if (data == undefined) return inputVacio.textContent = "Debes ingresar un valor valido.";

        cleanFields();

        nombrePokemon.textContent = data.name.toUpperCase();

        tipoPokemon.textContent = data.types
            .map((types) => {
                return types.type.name.toUpperCase()
            })
            .join(", ");
        alturaPokemon.textContent = data.height / 10 + "Mts";
        pesoPokemon.textContent = data.weight / 10 + "Kg";
        imgPokemon.setAttribute('src', data.sprites.front_default);
    }

    const cleanFields = () => {
        inputVacio.textContent = "";
        nombrePokemon.textContent = "";
        alturaPokemon.textContent = "";
        imgPokemon.textContent;
    }