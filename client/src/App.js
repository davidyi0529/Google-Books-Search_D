import React from "react";
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchBooks from "./pages/SearchBooks";
import SavedBooks from "./pages/SavedBooks";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={SearchBooks} />
          <Route exact path="/search" component={SearchBooks} />
          <Route exact path="/saved" component={SavedBooks} />
        </Switch>
      </div>
    </Router>
=======
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
>>>>>>> 028410c3fad209ffae71ef69f593916adce7eede
  );
}

export default App;
