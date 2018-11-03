import React, { Component } from "react";
import ElevatorDoor from "../ElevatorDoor/ElevatorDoor";
import "./Elevator.css";
import Button from "@material-ui/core/Button";

class Elevator extends Component {
  constructor() {
    super();
    this.state = {
      currentFloor: 1,
      floors: [0, 1, 2, 3, 4, 5]
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
            <i>Current Floor: {this.state.currentFloor}</i>
          </div>
        </div>

        <div className="elevator__elevator">
          <ElevatorDoor />
          <div className="elevator__controls">
            <div id="elevator__currentFloorNumber">
              <i>Current Floor: {this.state.currentFloor}</i>
            </div>
            <Button
              variant="contained"
              size="small"
              style={{ borderRadius: "50%" }}
            >
              5
            </Button>
            <Button
              variant="contained"
              size="small"
              style={{ borderRadius: "50%" }}
            >
              4
            </Button>
            <Button
              variant="contained"
              size="small"
              style={{ borderRadius: "50%" }}
            >
              3
            </Button>
            <Button
              variant="contained"
              size="small"
              style={{ borderRadius: "50%" }}
            >
              2
            </Button>
            <Button
              variant="contained"
              size="small"
              style={{ borderRadius: "50%" }}
            >
              1
            </Button>
            <Button
              variant="contained"
              size="small"
              style={{ borderRadius: "50%" }}
            >
              0
            </Button>
          </div>
        </div>

        <div className="elevator__floor" />
      </div>
    );
  }
}

export default Elevator;
