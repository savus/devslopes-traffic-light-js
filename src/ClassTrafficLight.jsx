import { Component } from "react";

const colors = ["green", "yellow", "red"];

export class ClassTrafficLight extends Component {
  state = {
    colorIndex: 2,
  };

  setColor = (index) =>
    index === this.state.colorIndex ? colors[this.state.colorIndex] : "black";

  incrementIndex = () => {
    const isLast = (this.state.colorIndex === colors.length - 1);
    if (isLast) {
      this.setState({ colorIndex: 0 });
    } else {
      this.setState({ colorIndex: this.state.colorIndex + 1 });
    }
  };

  render() {
    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          {/* Background color can be black | yellow | red | green */}
          <div className={`circle ${this.setColor(2)}`}></div>
          <div className={`circle ${this.setColor(1)}`}></div>
          <div className={`circle ${this.setColor(0)}`}></div>
        </div>
        <button className="next-state-button" onClick={this.incrementIndex}>
          Next State
        </button>
      </div>
    );
  }
}
