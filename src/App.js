import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './Pages/Home/Home';
import MeatSelect from './Pages/MeatSelect/MeatSelect';
import VegSelect from './Pages/VegSelect/VegSelect';
import Summary from './Pages/Summary/Summary';

import * as Constant from './Constants/Constants';

function App() {
  // Clean local storage init
  localStorage.clear();

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path={Constant.ROUTE_HOME} exact component={Home}/>
          <Route path={Constant.ROUTE_MEAT_SELECT} component={MeatSelect}/>
          <Route path={Constant.ROUTE_VEG_SELECT} component={VegSelect}/>
          <Route path={Constant.ROUTE_SUMMARY} component={Summary}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
