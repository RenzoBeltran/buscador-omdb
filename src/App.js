import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/login' component={Login} />
        <Route exact path='/' component={Home} />
        <Route path='/favorites' component={Favorites} />
      </Switch>
    </Router>
  );
}

export default App;
