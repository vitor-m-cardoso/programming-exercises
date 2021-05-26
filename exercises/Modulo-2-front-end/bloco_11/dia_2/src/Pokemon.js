import React, { Component } from 'react';
import './index.css'

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image} = this.props.pokemon;
    return (
      <div className='content'>
        <div className='pokemons'>
          <p>{ name }</p>
          <p>{ type }</p>
          <p>{ `Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}` }</p>
        </div>
        <div className='image'>
          <img src={image} alt={`${name}`}></img>
        </div>
      </div>
    );
  };
};

export default Pokemon;