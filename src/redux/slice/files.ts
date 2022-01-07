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
        selectFile: (state, action: { payload: string }) => {
            const { payload: fileId } = action;
            state.selectedFileId = fileId;
        },
        close: (state, action: { payload: string }) => {
            const { payload: fileId } = action;
            if (state.selectedFileId === fileId) {
                delete state.files[fileId];
                const remainingKeys = Object.keys(state.files);
                if (remainingKeys.length === 0) {
                    state.selectedFileId = "";
                } else {
                    const [firstId] = remainingKeys;
                    state.selectedFileId = firstId;
                }
            } else {
                delete state.files[fileId];
            }
        }
    },
});

export const {
    createFile,
    selectFile,
    close,
} = filesSlice.actions;

export const getSelectedFile = (state) => state.files.files[state.files.selectedFileId];

export const getFiles = (state) => {
    const files: M9File[] = Object.values(state.files.files);
    return files;
}

export default filesSlice.reducer;
