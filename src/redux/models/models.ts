import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchModelsData } from '@/api/models';

export const modelsAsync = createAsyncThunk('data/fetchModelsData', async () => {
    const data = await fetchModelsData();
    return data;
});

interface CategoryState {
    data: any;
}

const initialState: CategoryState = {
    data: null,
};

export const modelsSlice = createSlice({
    name: 'models',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(modelsAsync.fulfilled, (state, action: PayloadAction) => {
            return { ...state, data: action.payload };
        });
    },
});

export default modelsSlice.reducer;