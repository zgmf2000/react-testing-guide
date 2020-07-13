import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Home from 'pages/home/Home';
import AccordionForm from 'pages/accordion/AccordionForm'
import FakerGenerator from './pages/faker/FakerGenerator';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/accordion">
          <AccordionForm />
        </Route>
        <Route exact path="/faker">
          <FakerGenerator />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
