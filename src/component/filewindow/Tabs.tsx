import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import M9File from "../../entity/m9File";
import { selectFile } from '../../redux/slice/files';

const StyledTab = styled.div`
float: left;
background-color: ${(props) => props.isSelected ? 'white' : 'gray'};
`;

const Tabs = ({ files, selectedFileId }: { files: M9File[], selectedFileId: string }) => {
    const dispatch = useDispatch();

    if (files.length <= 1) return null;

    return <div>
        {files.map(file => {
            const onClick = () => dispatch(selectFile(file.id));
            return <StyledTab
                key={file.name}
                isSelected={selectedFileId === file.id}
                onClick={onClick}
            >
                {file.name}
            </StyledTab>;
        })}
    </div>;
};

export default Tabs;
