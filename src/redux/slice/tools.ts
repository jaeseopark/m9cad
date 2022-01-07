import { createSlice } from '@reduxjs/toolkit';
import { LayerType } from '../../entity/overlayEntity';

export const toolsSlice = createSlice({
    name: 'tools',
    initialState: {
        selected: LayerType.polyline, // TODO: create a separate enum 'Tool'
    },
    reducers: {
        select: (state, action: { payload: LayerType }) => {
            state.selected = action.payload;
        }
    },
});

export const {
    select,
} = toolsSlice.actions;

export const getSelectedTool = (state) => {
    const selected: LayerType = state.tools.selected;
    return selected;
};

export default toolsSlice.reducer;
