import React from 'react';
import Pokedex from './Pokedex'
import Pokemons from './data';

function App() {
    return (
      <div className="App">
        <h1>Pokedex</h1>
        <Pokedex pokemons={Pokemons} />
      </div>
    );
}

export default App;