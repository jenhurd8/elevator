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
    console.log(this.props.doorStatus);

    return (
      <div className="elevatorDoor__container">
        <div
          className={
            this.props.currentFloor === 0
              ? "elevatorDoor__elevator div elevatorDoor__elevatorFloor0"
              : this.props.currentFloor === 1
                ? "elevatorDoor__elevator div elevatorDoor__elevatorFloor1"
                : this.props.currentFloor === 2
                  ? "elevatorDoor__elevator div elevatorDoor__elevatorFloor2"
                  : this.props.currentFloor === 3
                    ? "elevatorDoor__elevator div elevatorDoor__elevatorFloor3"
                    : this.props.currentFloor === 4
                      ? "elevatorDoor__elevator div elevatorDoor__elevatorFloor4"
                      : this.props.currentFloor === 5
                        ? "elevatorDoor__elevator div elevatorDoor__elevatorFloor5"
                        : "elevatorDoor__elevator"
          }
        >
          <div
            className={
              this.props.doorStatus === true
                ? "elevatorDoor__doorOpen"
                : "elevatorDoor__doorClosed"
            }
          />
        </div>
      </div>
    );
  }
}

export default ElevatorDoor;
