import { getTimestamp } from "../../util/dateUtil";
import { createLayer } from "../slice/edits";
import { createFile } from "../slice/files";

export const openFileMiddleware = (name: string, path: string, size: number) => dispatch => {
    // If two files have the same name/size, then they are the same file.
    const fileId = name + size.toFixed(0);
    const layerId = getTimestamp().toFixed(0);

    dispatch(createLayer({ fileId: path, layerId }));
    dispatch(createFile({
        name,
        path,
        id: fileId,
        selectedLayerId: layerId
    }));
};
