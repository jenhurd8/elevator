import React, { Component } from "react";
import "./ElevatorDoor.css";

class ElevatorDoor extends Component {
  constructor() {
    super();
    this.state = {
      doorOpen: true,
      currentFloor: 1
    };
    this.doorHandler = this.doorHandler.bind(this);
  }

  doorHandler() {
    this.setState({
      doorOpen: !this.state.doorOpen
    });
    console.log(this.state.doorOpen);
  }

  render() {
    return (
      <div className="elevatorDoor__container">
        <div className="elevatorDoor__elevator">
          <div
            className={
              this.state.doorOpen
                ? "elevatorDoor__doorOpen"
                : "elevatorDoor__doorClosed"
            }
          />
        </div>
        <div className="elevatorDoor__controls">
          <button onClick={this.doorHandler}>Status</button>
          Current Floor: {this.state.currentFloor}
        </div>
      </div>
    );
  }
}

export default ElevatorDoor;
