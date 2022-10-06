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
            ); // llamamos a la api
        return data
    }



    const buscarPokemon = async() => {
        let valueid = document.getElementById('value-id').value;
        data = await getPokemon(valueid)
        imgPokemon.setAttribute('src', '/img/descarga (4).jpg');
        if (valueid == "") return inputVacio.textContent = "Debes ingresar un valor numerico."
        if (data == undefined) return inputVacio.textContent = "Debes ingresar un valor valido.";

        cleanFields();
        //console.log(data)
        nombrePokemon.textContent = data.name;
        // tipoPokemon.textContent = data.types[0].type.name;
        tipoPokemon.textContent = data.types // mapeamos la lista de pokemones
            .map((type) => {
                console.log(type) // renderizamos cada pokemon
            })
            .join(""); // unimos los elementos del array en un string
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