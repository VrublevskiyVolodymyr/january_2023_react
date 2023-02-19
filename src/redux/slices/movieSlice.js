import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {moviesService} from "../../services";

const initialState = {
    movies: [],
    genres: [],
    searchMovie: [],
    selectedMovie: null,
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
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const searchMovie = createAsyncThunk(
    'movieSlice/searchMovie',
    async ({title}, thunkAPI) => {
        try {
            const {data} = await moviesService.searchMovie(title);
            return data
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
        setSelectedMovie: (state, action) => {
            state.selectedMovie = action.payload
        }
    },
    extraReducers: (builder) => builder
        .addCase(getAll.fulfilled, (state, action) => {
            const {results, page} = action.payload
            state.movies= results
            state.prev=page-1
            state.next=page+1
            state.loading = false
        })

        .addCase(getGenres.fulfilled, (state, action) => {
            state.genres= action.payload
            state.loading = false

        })
        .addCase(searchMovie.fulfilled, (state, action) => {
            const {results, page} = action.payload
            state.searchMovie= results
            state.prev=page-1
            state.next=page+1
            state.loading = false

        })
        .addDefaultCase((state, actions) => {
            const [actionStatus] = actions.type.split('/').slice(-1);
            state.loading = actionStatus === 'pending';
        })
});

const {reducer: movieReducer, actions: {setSelectedMovie}} = movieSlice

const movieActions = {
    getAll,
    getGenres,
    setSelectedMovie,
    searchMovie
}

export {movieReducer, movieActions}
