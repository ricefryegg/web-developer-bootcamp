import React, { Component } from "react";
import './Pokecard.css'

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'


// convert number to fixed digit (larger than original length)
const padDigit = (num, digit) => {
  let n_zero = digit - String(num).length;

  return `${'0'.repeat(n_zero)}${num}`
}

// let img_url = 

class Pokecard extends Component {

  render() {

    let imgSrc = POKE_API + padDigit(this.props.id, 3) + '.png';

    return (
      <div className='Pokecard'>

        <h1 className='Pokecard-title'>{this.props.name}</h1>

        <div className='Pokecard-img'>
          <img src={imgSrc} alt={this.props.name} />
        </div>

        <p className="Pokecard-data">Type: {this.props.type}</p>
        <p className="Pokecard-data">EXP: {this.props.exp}</p>

      </div>
    );
  }
}

export default Pokecard;