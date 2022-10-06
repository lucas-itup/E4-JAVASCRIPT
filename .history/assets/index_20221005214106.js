    let valueid = document.getElementById('value-id').value;
    var nombrePokemon = document.getElementById('nombre-pokemon');
    var tipoPokemon = document.getElementById('tipo-pokemon');
    var alturaPokemon = document.getElementById('altura-pokemon');
    var inputVacio = document.getElementById('input-vacio');
    var imgPokemon = document.getElementById("img-pokemon");
    const baseURL = "https://pokeapi.co/api/v2/pokemon/";

    const getAllPokemones = async() => {
        const res = await fetch(`${baseURL}?limit=8&offset=0`); // llamamos a la api
        const data = await res.json(); // obtenemos la data
        console.log(data)
    }


    const buscarPokemon = async() => {
        const URLS = results.map((pokemon) => pokemon.url);
    }