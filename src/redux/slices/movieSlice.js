import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {moviesService} from "../../services";

const initialState = {
    movies: [],
    genres: [],
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
            return data.results
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const getPoster = createAsyncThunk(
    'movieSlice/getPoster',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await moviesService.getAll(page);
            return data.results
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);




const getGenres = createAsyncThunk(
    'movieSlice/getGenres',
    async (_, thunkAPI) => {
        try {
            const {data} = await moviesService.getGenres;
            console.log(data)
            return data
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
            // const {prev, next, items} = action.payload
            state.movies= action.payload
            state.loading = false
            console.log(state.movies)

        })
        .addCase(getPoster.fulfilled, (state, action) => {
    // const {prev, next, items} = action.payload
    state.movies= action.payload
    state.loading = false
    // state.movies = items
    console.log(state.movies)
    // state.prev=prev
    // state.next=next
})
        .addCase(getGenres.fulfilled, (state, action) => {
            // const {prev, next, items} = action.payload
            state.genres= action.payload
            state.loading = false
            console.log(state.genres)

        })
        .addDefaultCase((state, actions) => {
            const [actionStatus] = actions.type.split('/').slice(-1);
            state.loading = actionStatus === 'pending';
        })
});

const {reducer: movieReducer} = movieSlice

const movieActions = {
    getAll,
    getGenres,
    getPoster
}

export {movieReducer, movieActions}
