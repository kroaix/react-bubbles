import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

import Login from "./components/Login";
import "./styles.scss";
import "semantic-ui-css/semantic.min.css";

function App() {
  const [colorList, setColorList] = useState([]);
  return (
    <Container>
      <Router>
        <div className="App">
          <Route exact path="/" component={Login} />
          {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        </div>
      </Router>
    </Container>
  );
}

export default App;