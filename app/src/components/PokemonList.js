import React from 'react';
import {connect} from 'react-redux';
import {getPokemon} from '../store/action';

const PokemonList = props => {
    const fetchPokemon = e => {
        e.preventDefault();
        props.getPokemon();
    };
    return(
        <>
        <h1> PokeDex</h1>
        <div>
            {props.pokemon.map(pokemon =>(
                <h4 key={pokemon.url}>{pokemon.name}</h4>
            ))}
        </div>
            {props.error && <p className='error'>{props.error}</p>}
            <button onClick={fetchPokemon}>Get Pokemon</button>
            </>
    );
};

const mapStateToProps = state => ({
    pokemon: state.pokemon,
    error: state.error
});

export default connect(
    mapStateToProps,
    {getPokemon}
)(PokemonList);
