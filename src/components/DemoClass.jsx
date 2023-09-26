import React, { Component } from "react";

export class DemoClass extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 5 };
  }
  updateState = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  render() {
    return (
      <div>
        {this.state.counter}
        <button onClick={() => this.updateState()}>Click Me!</button>
      </div>
    );
  }
}

export default DemoClass;
