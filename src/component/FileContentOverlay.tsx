import { useEffect, useState } from "react";

import M9File from "../entity/m9File";
import { guessMimetypeAsync } from "../util/mimeUtils";
import VideoContent from "./videocontent/VideoContent";

const FileContentOverlay = ({ file }: { file: M9File }) => {
    const [fileContent, setFileContent] = useState<JSX.Element>();

    useEffect(() => {
        const { id, path } = file;
        guessMimetypeAsync(file.name)
            .then(mimetype => {
                if (mimetype.startsWith("video/")) {
                    setFileContent(<VideoContent path={path} id={id} />);
                }
            })
    }, [file]);

    if (!fileContent) return <></>;

    return fileContent;
};

export default FileContentOverlay;
