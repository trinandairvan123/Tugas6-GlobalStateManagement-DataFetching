import { createSlice } from "@reduxjs/toolkit";

export const reducerKegiatan = createSlice({
    name: 'bootcamp',
    initialState: {
        data: [],
    },
    reducers: {
        submitData: (state, action) => {
            let sample = [...state.data];
            sample.push(action.payload);
            state.data = sample;
        },
        deleteData: (state, { payload }) => {
            let sample = [...state.data].filter((i) => i?.i !== payload.i && i?.kegiatan !== payload.kegiatan);
            state.data = sample;
        },
        editData: (state, { payload }) => {
            const newState = state.data.map(prev => prev.i === payload.i ? { ...prev, completed: !payload.completed } : prev);
            state.data = newState;
        }

    }
});

export const { submitData, deleteData, editData } = reducerKegiatan.actions;

export default reducerKegiatan.reducer;