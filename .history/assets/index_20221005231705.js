    var nombrePokemon = document.getElementById('nombre-pokemon');
    var tipoPokemon = document.getElementById('tipo-pokemon');
    var alturaPokemon = document.getElementById('altura-pokemon');
    var inputVacio = document.getElementById('input-vacio');
    var imgPokemon = document.getElementById("img-pokemon");
    var pesoPokemon = document.getElementById("peso-pokemon");
    const baseURL = "https://pokeapi.co/api/v2/pokemon/";

    const getPokemon = async(pokemon) => {
        try {
            const data = await fetch(baseURL + pokemon)
                .then(
                    (res) => res.json()
                ).catch(
                    (error) => console.log(error)
                ); // llamamos a la api

            //console.log(data)

        } catch (error) {
            //console.log(error)
        }

    }



    const buscarPokemon = async() => {
        let valueid = document.getElementById('value-id').value;
        if (valueid == "") return inputVacio.textContent = "Debes ingresar un valor numerico."
        data = await getPokemon(valueid);
        cleanFields();
        console.log(data)
        nombrePokemon.textContent = data.name;
        tipoPokemon.textContent = data.types[0].type.name;
        alturaPokemon.textContent = data.height / 10 + "Mts";
        pesoPokemon.textContent = data.weight / 10 + "Kg";
        imgPokemon.setAttribute('src', data.sprites.front_default);


    }

    const cleanFields = () => {
        inputVacio.textContent = "";
        nombrePokemon.textContent = "";
        alturaPokemon.textContent = "";
        imgPokemon.textContent;
        imgPokemon.setAttribute('src', '/img/descarga (4).jpg');
    }