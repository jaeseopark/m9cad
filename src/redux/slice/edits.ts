import { createSlice } from '@reduxjs/toolkit';
import Layer from '../../entity/layer';
import M9File from '../../entity/m9File';
import { LayerType, OverlayProps } from '../../entity/overlayEntity';

type UpdateOverlayProps = {
    fileId: string;
    layerId: string;
    overlayProps: OverlayProps;
};

type CreateLayerProps = {
    fileId: string;
    layerId: string;
}

export const editsSlice = createSlice({
    name: 'edits',
    initialState: {
        globalOverlayProps: {
            color: 'red',
            shouldCloseLoop: false,
            strokeWidth: 2,
            strokeDashLength: 15,
            strokeDashGap: 10,
            zigzagWavelength: 10,
            zigzagAmplitude: 10,
        } as OverlayProps,
        local: {} as ({ [fileId: string]: { [layerId: string]: Layer } })
    },
    reducers: {
        updateGlobalOverlayProps: (state, action: { payload: OverlayProps }) => {
            Object.assign(state.globalOverlayProps, action.payload);
        },
        updateLocalOverlayProps: (state, action: { payload: UpdateOverlayProps }) => {
            const { payload: { fileId, layerId, overlayProps } } = action;
            Object.assign(state.local[fileId][layerId].overlayProps, overlayProps);
        },
        createLayer: (state, action: { payload: CreateLayerProps }) => {
            const { payload: { fileId, layerId } } = action;
            const layer: Layer = {
                id: layerId,
                nodes: [],
                previewNode: null,
                layerType: LayerType.polyline,
                overlayProps: { ...state.globalOverlayProps },
                isVisible: true
            };
            state.local[fileId][layerId] = layer;
        },
    },
});

export const {
    updateGlobalOverlayProps,
    updateLocalOverlayProps,
    createLayer
} = editsSlice.actions;

export const getGlobalOverlayProps = (state) => state.edits.globalOverlayProps;

export const getOverlayPropsOrDefault = (file: M9File) => (state) => {
    if (file) {
        const fileMap = state.edits.local[file.id];
        if (fileMap) return fileMap[file.selectedLayerId].overlayProps;
    }
    return state.edits.globalOverlayProps;
}

export const getLayer = (fileId: string, layerId: string) => (state) => state.edits.local[fileId][layerId];

export const getLayers = (file: M9File) => (state) => {
    const layerMap = state.edits.local[file.id];
    const layers: Layer[] = Object.values(layerMap);
    return layers;
};

export default editsSlice.reducer;
