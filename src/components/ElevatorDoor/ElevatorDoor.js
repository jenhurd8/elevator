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
          <button onClick={this.doorHandler}>Open/Close Door</button>

          <b>{this.state.currentFloor}</b>
          <h1> Current Floor: </h1>
          <button>Floor 1</button>
          <button>Floor 2</button>
          <button>Floor 3</button>
          <button>Floor 4</button>
          <button>Floor 5</button>
        </div>
      </div>
    );
  }
}

export default ElevatorDoor;
