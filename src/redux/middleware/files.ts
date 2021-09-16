import { getTimestamp } from "../../util/dateUtil";
import { createLayer } from "../slice/edits";
import { createFile } from "../slice/files";

export const openFileMiddleware = (name: string, path: string) => dispatch => {
    const fileId = path; // TODO: uuid
    const layerId = getTimestamp().toFixed(0); // TODO: uuid;

    dispatch(createLayer({ fileId: path, layerId }));
    dispatch(createFile({
        name,
        path,
        id: fileId,
        selectedLayerId: layerId
    }));
};
