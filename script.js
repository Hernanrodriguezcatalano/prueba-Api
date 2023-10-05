async function fetchPokemonData() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
        const data = await response.json();

        // Accedemos a la lista de Pokémon
        const pokemonList = data.results;

        // Accedemos al elemento UL donde agregaremos los Pokémon
        const ul = document.getElementById('pokemon-list');

        // Recorremos la lista de Pokémon y agregamos cada uno como un elemento de lista LI
        pokemonList.forEach(pokemon => {
            const li = document.createElement('li');
            li.textContent = pokemon.name;
            ul.appendChild(li);
        });
    } catch (error) {
        console.error('Error al obtener datos de la PokeAPI:', error);
    }
}

// Llamamos a la función para cargar los datos
fetchPokemonData();