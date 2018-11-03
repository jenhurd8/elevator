import React, { Component } from "react";
import ElevatorDoor from "../ElevatorDoor/ElevatorDoor";
import "./Elevator.css";
import "../../../src/Reset.css";

class Elevator extends Component {
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
      <div className="elevator__parentContainer">
        <div className="elevator__spaceOverElevator" />
        <div className="elevator__thisElevator">
          <ElevatorDoor />
        </div>
        <div className="elevator__floor" />
      </div>
    );
  }
}

export default Elevator;
