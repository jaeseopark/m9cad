import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import M9File from "../../entity/m9File";

const StyledTitleBar = styled.div`
background-color: gray;
`;

const TitleBar = ({ file }: { file: M9File }) => {
    const dispatch = useDispatch();

    const CloseButton = () => <button onClick={() => { }}>x</button>;

    return <StyledTitleBar>
        {file.name}
        <CloseButton />
    </StyledTitleBar>;
};

export default TitleBar;
