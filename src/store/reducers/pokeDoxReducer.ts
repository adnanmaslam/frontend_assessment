import { PokeDoxState, pokeDoxActions } from "../types";
import { GET_POKEMONS_SUCCESS, GET_POKEMONS_FAILURE, GET_POKEMON_REQUEST } from "../types/pokeDoxActionTypes";

const initialState: PokeDoxState = {
    data: [],
    error: '',
    loading: true
};

const pokeDoxReducer = (state = initialState, action: pokeDoxActions) => {
    switch (action.type) {
        case GET_POKEMON_REQUEST:
            return {
                ...state,
                loading: true
            };
        case GET_POKEMONS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: '',
                data: action.payload.data
            };
        case GET_POKEMONS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return {
                ...state,
            };
    }
};

export default pokeDoxReducer;