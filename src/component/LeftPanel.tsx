import styled from 'styled-components';
import ToolBox from "./ToolBox";

const StyledLeftPanel = styled.div`
width: 30px;
`;

const LeftPanel = () => {
    return <StyledLeftPanel className="left-side">
        <ToolBox />
    </StyledLeftPanel>;
};

export default LeftPanel;
