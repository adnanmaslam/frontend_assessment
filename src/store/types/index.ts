import {
    GET_POKEMON_REQUEST,
    GET_POKEMONS_FAILURE,
    GET_POKEMONS_SUCCESS,
} from "./pokeDoxActionTypes";


export interface PokeDoxData {
    name: string, url: string
}
export interface PokeDoxState {
    data: Array<Pokemon>;
    error: string
    loading: boolean
}

export interface SearchPayload {
    search: string;
}

export interface PokemonSuccessPayload {
    data: Array<Pokemon>;
}

export interface PokemonFailurePayload {
    error: string;
}

export interface PokemonRequest {
    type: typeof GET_POKEMON_REQUEST;
    payload: string;
}

export type PokemonSuccess = {
    type: typeof GET_POKEMONS_SUCCESS;
    payload: PokemonSuccessPayload;
};

export type PokemonFailure = {
    type: typeof GET_POKEMONS_FAILURE;
    payload: PokemonFailurePayload;
};



export type pokeDoxActions = PokemonSuccess | PokemonRequest | PokemonFailure;
