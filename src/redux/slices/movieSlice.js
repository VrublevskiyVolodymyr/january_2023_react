import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {moviesService} from "../../services";

const initialState = {
    movies: [],
    prev:null,
    next:null,
    errors: null,
    loading: null,
};

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await moviesService.getAll(page);
            console.log(data.results);
            return data.results
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);


const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        // setCarForUpdate: (state, action) => {
        //     state.carForUpdate = action.payload
        // }
    },
    extraReducers: (builder) => builder
        .addCase(getAll.fulfilled, (state, action) => {
            const {prev, next, items} = action.payload
            state.loading = false
            state.movies = items
            console.log(state)
            state.prev=prev
            state.next=next
        })
        .addDefaultCase((state, actions) => {
            const [actionStatus] = actions.type.split('/').slice(-1);
            state.loading = actionStatus === 'pending';
        })
});

const {reducer: movieReducer} = movieSlice

const movieActions = {
    getAll
}

export {movieReducer, movieActions}
