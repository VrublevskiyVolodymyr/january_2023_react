import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carService} from "../../services";

const initialState = {
    cars: [],
    prev:null,
    next:null,
    carForUpdate: null,
    errors: null,
    loading: null,
};

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async ({page}, thunkAPI) => {
        try {
            // await new Promise(resolve => setTimeout(()=>resolve(),2000))
            const {data} = await carService.getAll(page);
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const create = createAsyncThunk(
    'carSlice/create',
    async ({car}, thunkAPI) => {
        try {
            await carService.create(car);
            thunkAPI.dispatch(getAll({page:1}))
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);
const deleteById = createAsyncThunk(
    'carSlice/deleteById',
    async ({id}, thunkAPI) => {
        try {
            await carService.deleteById(id);
            thunkAPI.dispatch(getAll())
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const updateById = createAsyncThunk(
    'carService/updateById',
    async ({id, car}, thunkAPI) => {
        try {
            await carService.updateById(id, car);
            thunkAPI.dispatch(getAll())
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload
        }
    },

    extraReducers: (builder) => builder
        .addCase(getAll.fulfilled, (state, action) => {
           const {prev, next, items} = action.payload
            state.loading = false
            state.cars = items
            state.prev=prev
            state.next=next

        })
        .addDefaultCase((state, actions) => {
            const [actionStatus] = actions.type.split('/').slice(-1);
            state.loading = actionStatus === 'pending';
        })
});

const {reducer: carReducer, actions: {setCarForUpdate}} = carSlice

const carActions = {
    getAll,
    create,
    deleteById,
    setCarForUpdate,
    updateById
}

export {carReducer, carActions}
