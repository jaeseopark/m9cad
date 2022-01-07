import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppFrame from './component/AppFrame';

import './App.global.scss';


export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={AppFrame} />
      </Switch>
    </Router>
  );
}
