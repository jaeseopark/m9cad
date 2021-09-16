import M9File from "../../entity/m9File";
import { OverlayProps } from "../../entity/overlayEntity";
import { updateGlobalOverlayProps, updateLocalOverlayProps } from "../slice/edits";

export const updateOverlayProps = (file: M9File, overlayProps: OverlayProps) => dispatch => {
    if (file)
        dispatch(updateLocalOverlayProps({
            fileId: file.id,
            layerId: file.selectedLayerId,
            overlayProps
        }));
    dispatch(updateGlobalOverlayProps(overlayProps));
};
