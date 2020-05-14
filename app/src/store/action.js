import axios from 'axios';


export const FETCH_POKEMON_START = 'FETCH_POKEMON_START';
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS';
export const FETCH_POKEMON_FAIL = 'FETCH_POKEMON_FAIL';

export const getPokemon = () => dispatch => {
    dispatch({ type: FETCH_POKEMON_START });
    axios
      .get('https://pokeapi.co/api/v2/pokemon/?limit=20')
      .then(res =>{

        for (let i = 0; i < res.data.results.length; i++) {
          const element = res.data.results[i];
          axios.get(element.url)
          .then(pkmn=>{
            dispatch({ type: FETCH_POKEMON_SUCCESS, payload: pkmn.data })
          })
          .catch(e=>console.log(e))
        }

      })
      .catch(err => dispatch({ type: FETCH_POKEMON_FAIL, payload:`${err.response.status} ${err.response.data}`}));
  };