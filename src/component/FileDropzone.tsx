import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useDispatch } from 'react-redux';

import styled from 'styled-components';

import { openFileMiddleware } from '../redux/middleware/files';

const DropzoneDiv = styled.div`
width: 100%;
height: 100%;
display: flex;
`;

const FileDropzone = ({ children }) => {
    const dispatch = useDispatch();

    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach(file => {
            const path = URL.createObjectURL(file);
            dispatch(openFileMiddleware(file.name, path, file.size));
        })
    }, [dispatch]);

    const { getRootProps } = useDropzone({ onDrop });

    const props = getRootProps({
        onClick: (event) => {
            event.stopPropagation();
        },
    });

    return <DropzoneDiv {...props}>{children}</DropzoneDiv>;
};

export default FileDropzone;