import { openFile } from "../slice/files";

export const openFileMiddleware = (name: string, path: string) => dispatch => {

    // import { guessMimetypeAsync } from './util/mimeUtils';

    // const getImageElement = (path: string) => (
    //   // eslint-disable-next-line jsx-a11y/alt-text
    //   <img className="display-component" src={path} />
    // );

    // const getVideoElement = (path: string) => (
    //   <video className="display-component" src={path} autoPlay controls muted />
    // );


    // guessMimetypeAsync(file.name)
    //   .then((mimetype: string) => {
    //     if (mimetype.startsWith('image/')) {
    //         return 
    //       setFileView(getImageElement(previewPath));
    //     } else if (mimetype.startsWith('video/')) {
    //       setFileView(getVideoElement(previewPath));
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     alert(JSON.stringify(error));
    //   });
    dispatch(openFile({
        name, path
    }));
};
