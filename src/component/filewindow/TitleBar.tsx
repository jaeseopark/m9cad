import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import M9File from "../../entity/m9File";
import { closeAll } from '../../redux/slice/files';

const StyledTitleBar = styled.div`
background-color: gray;
`;

const TitleBar = ({ file }: { file: M9File }) => {
    const dispatch = useDispatch();

    const CloseButton = () => <button onClick={() => dispatch(closeAll())}>x</button>;

    return <StyledTitleBar>
        {file.name}
        <CloseButton />
    </StyledTitleBar>;
};

export default TitleBar;
