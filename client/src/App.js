import React from "react";
import Books from "./pages/Books";
import Detail from "./pages/Detail"
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Books />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/detail">
            <Detail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
