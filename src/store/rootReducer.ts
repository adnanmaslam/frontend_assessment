import { combineReducers } from "redux";

import pokeDoxReducer from "./reducers/pokeDoxReducer";

const rootReducer = combineReducers({
    pokedox: pokeDoxReducer,
});

export type pokeDoxState = ReturnType<typeof rootReducer>;

export default rootReducer;