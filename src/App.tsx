/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-alert */
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Editor from './component/Editor';

import { guessMimetypeAsync } from './util/mimeUtils';

import './App.global.scss';

const getImageElement = (path: string) => (
  // eslint-disable-next-line jsx-a11y/alt-text
  <img className="display-component" src={path} />
);

const getVideoElement = (path: string) => (
  <video className="display-component" src={path} autoPlay controls muted />
);

const MainView = () => {
  const [fileView, setFileView] = useState<JSX.Element>();

  const onPathChange = (file) => {
    const previewPath = URL.createObjectURL(file);
    guessMimetypeAsync(file.name)
      .then((mimetype: string) => {
        if (mimetype.startsWith('image/')) {
          setFileView(getImageElement(previewPath));
        } else if (mimetype.startsWith('video/')) {
          setFileView(getVideoElement(previewPath));
        }
      })
      .catch((error) => {
        console.log(error);
        alert(JSON.stringify(error));
      });
  };

  const onDrop = useCallback((acceptedFiles) => {
    const [file] = acceptedFiles;
    onPathChange(file);
  }, []);

  const { getRootProps } = useDropzone({
    onDrop,
    multiple: false,
  });

  return (
    <div
      className="dropzone"
      {...getRootProps({
        onClick: (event) => {
          event.stopPropagation();
        },
      })}
    >
      <Editor fileView={fileView!} />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={MainView} />
      </Switch>
    </Router>
  );
}
