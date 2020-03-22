import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import About from "./pages/about";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./pages/projects";
import Contact from "./pages/contact"


export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        {/* <Link to="/">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link> */}
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route path="/projects"><Projects></Projects></Route>
          <Route path="/contact"><Contact></Contact></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
