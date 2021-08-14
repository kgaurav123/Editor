import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WebEditor from "./Components/WebEditor";
import MarkdownEditor from "./Components/MarkdownEditor";
import Home from './Components/Home'
function App() {
  return (
    <div>
      <Router>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/web" exact component={WebEditor} />
          <Route path="/markdown" exact component={MarkdownEditor} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
