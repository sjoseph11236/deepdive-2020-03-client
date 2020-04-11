import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllQuestions from "./components/questions/AllQuestions";
import CreateQuestion from "./components/questions/CreateQuestion";
import CreateOption from "./components/options/CreateOption";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/questions">Questions</Link>
            </li>
            <li>
              <Link to="/questions/create">Create Question</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/options/create">
            <CreateOption />
          </Route>
          <Route exact path="/questions/create">
            <CreateQuestion />
          </Route>
          <Route path="/questions">
            <AllQuestions />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>Quiz</h2>;
}
