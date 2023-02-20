import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {moviesService} from "../../services";

const initialState = {
    movies: [],
    genres: [],
    searchMovie: [],
    genresById: [],
    title:null,
    idGenre:null,
    selectedMovie: null,
    total_pages:null,
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
    async ({title,page}, thunkAPI) => {
        try {
            const {data} = await moviesService.searchMovie(title,page);
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const getAllByGenres = createAsyncThunk(
    'movieSlice/getAllByGenres',
    async ({id,page}, thunkAPI) => {
        try {
            const {data} = await moviesService.getAllByGenresId(id,page);
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
            const {data} = await moviesService.getGenres();
            return data.genres
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
        },
        setTitle: (state, action) => {
            state.title=action.payload
        },
        setIdGenre: (state, action) => {
            state.idGenre=action.payload
        }
    },
    extraReducers: (builder) => builder
        .addCase(getAll.fulfilled, (state, action) => {
            const { results, page, total_pages} = action.payload
            state.movies= results
            state.prev=page-1
            state.next=page+1
            state.total_pages=total_pages
            state.loading = false
        })

        .addCase(getGenres.fulfilled, (state, action) => {
            state.genres= action.payload
            state.loading = false
        })
        .addCase(searchMovie.fulfilled, (state, action) => {
            const {results,total_pages, page} = action.payload
            state.searchMovie= results
            state.prev=page-1
            state.next=page+1
            state.total_pages=total_pages
            state.loading = false

        })
        .addCase(getAllByGenres.fulfilled, (state, action) => {
            const {results,total_pages, page} = action.payload
            state.genresById= results
            state.prev=page-1
            state.next=page+1
            state.total_pages=total_pages
            state.loading = false
        })
        .addDefaultCase((state, actions) => {
            const [actionStatus] = actions.type.split('/').slice(-1);
            state.loading = actionStatus === 'pending';
        })
});

const {reducer: movieReducer, actions: {setSelectedMovie,setTitle,setIdGenre}} = movieSlice

const movieActions = {
    getAll,
    getGenres,
    setSelectedMovie,
    searchMovie,
    setTitle,
    getAllByGenres,
    setIdGenre
}

export {movieReducer, movieActions}
