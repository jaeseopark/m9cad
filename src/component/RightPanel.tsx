import styled from 'styled-components';

import ColorPalette from "./ColorPalette";
import LayerPanel from "./LayerPanel";

const StyledRightPanel = styled.div`
width: 220px;
height: 100%;
`;

const RightPanel = () => {
    return <StyledRightPanel className="right-side">
        <ColorPalette />
        <LayerPanel />
    </StyledRightPanel>;
};

export default RightPanel;
