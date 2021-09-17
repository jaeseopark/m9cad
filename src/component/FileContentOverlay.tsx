import { useEffect, useState } from "react";
import styled from 'styled-components';

import M9File from "../entity/m9File";
import { guessMimetypeAsync } from "../util/mimeUtils";


const Overlay = () => {
    return <div />;
};

const StyledVideoContent = styled.div`
video { width: 100%; }
`;

const VideoContent = ({ path, id }: { path: string, id: string }) => {
    const onLoad = (e) => {
        // TODO: adjust height
    };

    return <StyledVideoContent>
        <div>
            <video src={path} onLoad={onLoad} muted />
            <Overlay />
        </div>
        <div className="controls" />
    </StyledVideoContent>;
};

const FileContentOverlay = ({ file }: { file: M9File }) => {
    const [fileContent, setFileContent] = useState<JSX.Element>();

    const { id, path } = file;

    useEffect(() => {
        guessMimetypeAsync(file.name)
            .then(mimetype => {
                if (mimetype.startsWith("video/")) {
                    setFileContent(<VideoContent path={path} id={id} />);
                }
            })
    });

    if (!fileContent) return <></>;

    return fileContent;
};

export default FileContentOverlay;
