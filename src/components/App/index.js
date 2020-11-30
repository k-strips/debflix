import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";

//local import
import { Home, Movie } from "../Pages";
import { LandingNavbar } from "../Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <LandingNavbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movie/:id" component={Movie} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
