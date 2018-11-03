import React, { Component } from "react";
import "./ElevatorDoor.css";

class ElevatorDoor extends Component {
  constructor() {
    super();
    this.state = {
      doorOpen: true
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
        <button onClick={this.doorHandler}>Open/Close Door</button>

        {/* <b>{this.state.currentFloor}</b> */}
        {/* <h1> Current Floor: </h1> */}
      </div>
    );
  }
}

export default ElevatorDoor;
