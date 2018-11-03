import React, { Component } from "react";
import ElevatorDoor from "../ElevatorDoor/ElevatorDoor";
import "./Elevator.css";

class Elevator extends Component {
  constructor() {
    super();
    this.state = {
      currentFloor: 1
    };
    this.floorHandler = this.floorHandler.bind(this);
  }

  floorHandler(num) {
    this.setState({
      currentFloor: num
    });
    console.log(this.state.doorOpen);
  }

  render() {
    return (
      <div className="elevator__parentContainer">
        <div className="elevator__spaceOverElevator">
          <div id="elevator__currentFloor">
            Current Floor: {this.state.currentFloor}
          </div>
        </div>

        <div className="elevator__elevator">
          <ElevatorDoor />
          <div className="elevatorDoor__controls">
            <div id="elevator__currentFloorNumber">
              Current Floor: {this.state.currentFloor}
            </div>
            <button>Floor 5</button>
            <button>Floor 4</button>
            <button>Floor 3</button>
            <button>Floor 2</button>
            <button>Floor 1</button>
            <button>Basement</button>
          </div>
        </div>

        <div className="elevator__floor" />
      </div>
    );
  }
}

export default Elevator;
