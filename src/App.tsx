import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import FileDropzone from './component/FileDropzone';
import FileView from './component/FileView';
import LeftPanel from './component/LeftPanel';
import RightPanel from './component/RightPanel';
import Toolbar from './component/toolbar/Toolbar';

import './App.global.scss';

const AppFrame = () => {
  return (
    <div className="editor">
      <Toolbar />
      <div className="body">
        <FileDropzone />
        <LeftPanel />
        <FileView />
        <RightPanel />
      </div>
    </div>
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
