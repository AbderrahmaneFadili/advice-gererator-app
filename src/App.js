import React, { Component } from "react";
import "./App.css";
import Card from "./components/Card/Card";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Card
          title={"Advice #222"}
          body={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
          dolorum, eaque nostrum laboriosam mollitia cum nobis quisquam,
          molestias doloribus eius amet soluta iusto facere in, quod blanditiis
          et autem dolorem!`}
        />
      </div>
    );
  }
}

export default App;
