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
        data = await getPokemon(valueid);

        // const urlPokemon = data.results.find((pokemon) => pokemon.url);

        console.log(data)

        /*const dataUrls = URLS.map(async(url) => { // mapeamos las urls
            console.log(url)

            // retornassmos la data de cada pokemon
        })

        console.log(await Promise.all(dataUrls))*/

    }