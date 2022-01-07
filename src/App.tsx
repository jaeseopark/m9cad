import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import styled from 'styled-components';

import FileDropzone from './component/FileDropzone';
import FileView from './component/filewindow/FileWindow';
import LeftPanel from './component/LeftPanel';
import RightPanel from './component/RightPanel';
import Toolbar from './component/toolbar/Toolbar';

import './App.global.scss';

const StyledAppFrame = styled.div`
height: 100%;
`;

const AppFrame = () => {
  return (
    <StyledAppFrame>
      <Toolbar />
      <FileDropzone>
        <LeftPanel />
        <FileView />
        <RightPanel />
      </FileDropzone>
    </StyledAppFrame>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={AppFrame} />
      </Switch>
    </Router>
  );
}
