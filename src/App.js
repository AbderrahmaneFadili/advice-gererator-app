import React, { Component } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import ReactLoading from "react-loading";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      advice: null,
    };
  }

  //generate advice method
  generateAdvice = () => {
    //set loading to true & advice to null
    this.setState((prev) => ({
      ...prev,
      loading: true,
      advice: null,
    }));
    //fetch
    fetch(`https://api.adviceslip.com/advice`)
      .then((response) => response.json())
      .then((advice) => {
        //then set loading to false
        //and set the advice
        this.setState((prev) => ({
          ...prev,
          loading: false,
          advice: advice,
        }));
      })
      .catch((error) => console.log(error));
  };

  //component did mount
  componentDidMount() {
    this.generateAdvice();
  }

  render() {
    return (
      <div className="container">
        {this.state.loading && (
          <ReactLoading
            type="spokes"
            color="hsl(193, 38%, 86%)"
            height={100}
            width={100}
          />
        )}
        {this.state.advice && (
          <Card
            generateAdvice={this.generateAdvice}
            title={`Advice ${this.state.advice.slip.id}`}
            body={this.state.advice.slip.advice}
          />
        )}
      </div>
    );
  }
}

export default App;
