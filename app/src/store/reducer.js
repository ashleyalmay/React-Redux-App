import { FETCH_POKEMON_START, FETCH_POKEMON_SUCCESS, FETCH_POKEMON_FAIL } from './action';
  
  const initialState = {
    pokemon: [],
    error: '',
    isFetching: false
  };

  function reducer(state = initialState, action) {
    console.log('reducer', action);
    switch (action.type) {
      case FETCH_POKEMON_START:
        return {
          ...state,
          isFetching: true,
          error: ''
        };
      case FETCH_POKEMON_SUCCESS:
        return {
          ...state,
          pokemon: state.pokemon.concat(action.payload).sort((mon1, mon2) => (mon1.id > mon2.id) ? 1 : -1),
          isFetching: false,
          error: ''
        };
      case FETCH_POKEMON_FAIL:
        return {
          ...state,
          error: action.payload
        };
      default:
        return state;
    }
  }
  
  export default reducer;