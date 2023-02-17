import {combineReducers, configureStore} from "@reduxjs/toolkit";

import { postReducer, carReducer, movieReducer} from "./slices";

const rootReducer = combineReducers({
    posts: postReducer,
    cars: carReducer,
    movies: movieReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {setupStore}
