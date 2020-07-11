import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Home from 'pages/home/Home';
import AccordionForm from 'pages/accordion/AccordionForm'

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
      </Switch>
    </Router>
  );
}

export default App;
