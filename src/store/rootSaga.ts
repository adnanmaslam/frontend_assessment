import { all, fork } from "redux-saga/effects";
import pokemonSaga from "./saga/pokeDoxSaga";

export function* rootSaga() {
    yield all([fork(pokemonSaga)]);
}