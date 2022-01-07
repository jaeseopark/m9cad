import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useDispatch } from 'react-redux';
import { openFileMiddleware } from '../redux/middleware/files';

const FileDropzone = () => {
    const dispatch = useDispatch();

    const onDrop = useCallback((acceptedFiles) => {
        const [file] = acceptedFiles;
        const path = URL.createObjectURL(file);
        dispatch(openFileMiddleware(file.name, path));
    }, [dispatch]);

    const { getRootProps } = useDropzone({
        onDrop,
        multiple: false,
    });

    const props = getRootProps({
        onClick: (event) => {
            event.stopPropagation();
        },
    });

    return <div className="dropzone" {...props} />;
};

export default FileDropzone;