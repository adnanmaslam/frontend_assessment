import { all, call, put, takeLatest } from "redux-saga/effects";

import {
    getPokemonFailure,
    getPokemonSuccess,
} from "../actions/pokeDoxActions";
import { GET_POKEMON_REQUEST, } from "../types/pokeDoxActionTypes";
import { MainClient, PokemonClient } from "pokenode-ts";
import { Pokemon } from "../../intefaces/pokemon";


const getPokemonRequest = async (search: string) => {
    try {
        const api = new MainClient();
        const data: any = await api.pokemon
            .getPokemonByName(search)
        if (data?.results?.length) {
            return data
        }
        else if (data?.name) {
            return { results: [data] }
        }
        else {
            return data
        }

    } catch (error) {
        return error
    }
};

function* getPokeMonSaga(action: any) {
    try {
        const response: {
            results: Pokemon[]
        } = yield call(getPokemonRequest, action.payload);
        if (action.payload && !response.results?.length) {
            throw Error('Not Found')
        }
        yield put(
            getPokemonSuccess({
                data: response.results,
            })
        );
    } catch (error: any) {
        yield put(
            getPokemonFailure({
                error: error.message,
            })
        );
    }
}


function* pokemonSaga() {
    yield all([takeLatest(GET_POKEMON_REQUEST, getPokeMonSaga)]);
}

export default pokemonSaga;