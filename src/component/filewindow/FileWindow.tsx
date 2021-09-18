import { useSelector } from "react-redux";
import styled from 'styled-components';

import { getFiles, getSelectedFile } from "../../redux/slice/files";

import M9File from "../../entity/m9File";

import Tabs from "./Tabs";
import FileContentOverlay from "../FileContentOverlay";

const StyledFileWindow = styled.div`
flex: 1;
${({ active }) => active && "border: 1px white solid;"}
`;

const FileWindow = () => {
    const files: M9File[] = useSelector(getFiles);
    const selectedFile: M9File = useSelector(getSelectedFile);

    if (files.length === 0 || !selectedFile) return <StyledFileWindow />;

    return (
        <StyledFileWindow active>
            <Tabs files={files} selectedFileId={selectedFile.id} />
            <FileContentOverlay file={selectedFile} />
        </StyledFileWindow>
    );
};

export default FileWindow;
