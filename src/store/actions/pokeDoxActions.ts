import {
    GET_POKEMONS_SUCCESS,
    GET_POKEMON_REQUEST,
    GET_POKEMONS_FAILURE,
} from "../types/pokeDoxActionTypes";

import {
    PokemonSuccessPayload,
    PokemonSuccess,
    PokemonRequest,
    PokemonFailure,
    PokemonFailurePayload
} from "../types";


export const pokeRequest = (search: string): PokemonRequest => ({
    type: GET_POKEMON_REQUEST,
    payload: search,
});

export const getPokemonSuccess = (payload: PokemonSuccessPayload): PokemonSuccess => ({
    type: GET_POKEMONS_SUCCESS,
    payload,
});

export const getPokemonFailure = (payload: PokemonFailurePayload): PokemonFailure => ({
    type: GET_POKEMONS_FAILURE,
    payload,
});

