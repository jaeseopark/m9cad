import { createSlice } from '@reduxjs/toolkit';

type M9File = {
    name: string;
    path: string; // this is unique
};

export const filesSlice = createSlice({
    name: 'files',
    initialState: {
        files: [] as (M9File[]),
        selectedFile: null as (M9File | null)
    },
    reducers: {
        openFile: (state, action: { payload: M9File }) => {
            const { payload: newFile } = action;
            const { files } = state;
            if (!files.find(f => f.path === newFile.path)) {
                files.push(newFile);
            }
            state.selectedFile = newFile;
        }
    },
});

export const {
    openFile,
} = filesSlice.actions;

export const getSelectedFile = (state) => state.selectedFile;

export const getFileNames = (state) => state.files.map(f => f.name);

export default filesSlice.reducer;
