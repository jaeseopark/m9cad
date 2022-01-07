import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import M9File from "../../entity/m9File";
import { close, selectFile } from '../../redux/slice/files';

const StyledTab = styled.div`
float: left;
background-color: ${(props) => props.isSelected ? 'white' : 'gray'};
`;

const StyledCloseButton = styled.button`
`;

const Tabs = ({ files, selectedFileId }: { files: M9File[], selectedFileId: string }) => {
    const dispatch = useDispatch();

    return (
        <div>
            {files.map(file => {
                const onClick = () => dispatch(selectFile(file.id));
                const onClose = () => dispatch(close(file.id));
                return <StyledTab
                    key={file.name}
                    isSelected={selectedFileId === file.id}
                >
                    <span onClick={onClick}>{file.name}</span>
                    <StyledCloseButton onClick={onClose}>x</StyledCloseButton>
                </StyledTab>;
            })}
        </div>
    );
};

export default Tabs;
