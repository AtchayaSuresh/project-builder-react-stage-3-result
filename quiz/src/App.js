import React from 'react';
import './App.css';
import HomeComponent from './components/HomeComponent';
import QuizComponent from './components/QuizComponent';
import ResultComponent from './components/ResultComponent';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomeComponent/>
          </Route>
          <Route path="/HomeComponent">
            <HomeComponent/>
          </Route>
          <Route path="/QuizComponent">
            <QuizComponent/>
          </Route>
          <Route path="/ResultComponent" component={ResultComponent}>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;