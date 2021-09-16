import ColorPalette from "./ColorPalette";
import LayerPanel from "./LayerPanel";

const RightPanel = () => {
    return <div className="right-side">
        <ColorPalette />
        <LayerPanel />
    </div>;
};

export default RightPanel;
