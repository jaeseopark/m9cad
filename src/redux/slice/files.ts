import { createSlice } from '@reduxjs/toolkit';
import M9File from '../../entity/m9File';

export const filesSlice = createSlice({
    name: 'files',
    initialState: {
        files: {} as ({ [fileId: string]: M9File }),
        selectedFileId: ""
    },
    reducers: {
        createFile: (state, action: { payload: M9File }) => {
            const { payload: newFile } = action;
            const existingFile = Object.values(state.files).find(f => f.path === newFile.path);
            if (!existingFile) {
                state.selectedFileId = newFile.id;
                state.files[newFile.id] = newFile;
            } else {
                state.selectedFileId = existingFile.id;
            }
        },
    },
});

export const {
    createFile,
} = filesSlice.actions;

export const getSelectedFile = (state) => state.files.files[state.files.selectedFileId]

export default filesSlice.reducer;
