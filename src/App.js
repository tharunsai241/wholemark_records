import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";

import Screen1 from './screen1/Screen1'
import Screen2 from './screen2/Screen2'

function App() {
  return (
    <Router><div className="App">
      <Route path="/" component={Screen1} exact />
      <Route path="/Screen2" component={Screen2}/>
    </div>
    </Router>
  );
}

export default App;