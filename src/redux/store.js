import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {userReducer,postReducer,carReducer} from "./slices";

const rootReducer=combineReducers({
    users: userReducer,
    posts: postReducer,
    cars: carReducer
});

const setupStore=()=> configureStore({
    reducer: rootReducer
});

export {setupStore}
