import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carService} from "../../services";

const initialState = {
    cars: [],
    carForApdate:null,
    errors: null,
    loading: null,
    selectedCar: null
};

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_, thunkAPI) => {
        try {
            const {data} = await carService.getAll()
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const getById =createAsyncThunk(
    'carService/getById',
    async ({id}, thunkAPI) => {
        try {
            const {data} = await carService.getById(id);

            return data
        } catch (e){
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setSelectedCar: (state, action) => {
            state.selectedCar = action.payload
        }
    },

    extraReducers: (builder) => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.loading = false
            state.cars = action.payload
        })
        .addCase(getAll.rejected, (state, action) => {
            state.loading = false
            state.errors = action.payload
        })
        .addCase(getAll.pending, (state) => {
            state.loading = true
        })
        .addCase(getById.fulfilled,(state, action)=>{
            state.selectedUser=action.payload
        })
});

const {reducer: carReducer, actions: {setSelectedCar}} = carSlice

const carActions = {
    setSelectedCar,
    getAll,
    getById
}

export {carReducer, carActions}
