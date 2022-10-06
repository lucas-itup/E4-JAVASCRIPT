    var nombrePokemon = document.getElementById('nombre-pokemon');
    var tipoPokemon = document.getElementById('tipo-pokemon');
    var alturaPokemon = document.getElementById('altura-pokemon');
    var inputVacio = document.getElementById('input-vacio');
    var imgPokemon = document.getElementById("img-pokemon");
    const baseURL = "https://pokeapi.co/api/v2/pokemon/";

    const getPokemon = async(pokemon) => {
        const res = await fetch(baseURL + pokemon); // llamamos a la api
        const data = await res.json(); // obtenemos la data
        return data;
    }



    const buscarPokemon = async() => {
        let valueid = document.getElementById('value-id').value;
        if (valueid == "") return inputVacio.textContent = "Debes ingresar un valor numerico."
        data = await getPokemon(valueid);
        cleanFields();


    }

    const cleanFields = () => {
        inputVacio.textContent = "";
        nombrePokemon.textContent = "";
        alturaPokemon.textContent = "";
        imgPokemon.textContent;
        imgPokemon.setAttribute('src', '/img/descarga (4).jpg');
    }