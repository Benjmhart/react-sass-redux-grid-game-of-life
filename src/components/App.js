import React from "react";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import "../styles/App.css";
import Control from "./Control";
import LifeGridContainer from "./LifeGridContainer";

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">
        freeCodeCamp <i className="fa fa-free-code-camp" /> React/Redux/CSS Grid
        Game of Life
      </h1>
      <Control />
    </header>
    <LifeGridContainer />
  </div>
);

export default App;
