import { useState } from "react";
import styled from 'styled-components';

const Overlay = () => {
    return <div />;
};

const CONTROLS_HEIGHT = 100;

const StyledVideoContent = styled.div`
video {
    width: 100%;
    height: ${({ desiredHeight }) => desiredHeight}px;
    margin-top: -${CONTROLS_HEIGHT}px;
}
`;

const VideoContent = ({ path, id }: { path: string, id: string }) => {
    const [aspectRatio, setAspectRatio] = useState(0);
    const [desiredHeight, setDesiredHeight] = useState(0);

    // const onResize = (e) => {
    //     const { target: { clientWidth } } = e;
    //     setDesiredHeight(clientWidth / aspectRatio);
    // };

    const onLoadedMetadata = (e) => {
        const { target: { videoHeight: height, videoWidth: width, clientWidth } } = e;
        const newAspectRatio = width / height;
        setAspectRatio(newAspectRatio);
        setDesiredHeight(clientWidth / newAspectRatio + CONTROLS_HEIGHT * 2);
    };

    return <StyledVideoContent desiredHeight={desiredHeight}>
        <div>
            <video src={path} onLoadedMetadata={onLoadedMetadata} muted controls />
            <Overlay />
        </div>
        <div className="controls" />
    </StyledVideoContent>;
};

export default VideoContent;
