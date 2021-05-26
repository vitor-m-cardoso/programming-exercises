import React, { Component } from 'react';
import Pokemon from './Pokemon'
import './index.css'

class Pokedex extends Component {
  render() {
    return (
      <div className="main-content">
        {this.props.pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon}/>)}
      </div>
    );
  };
}


export default Pokedex;