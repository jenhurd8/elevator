import React, { Component } from "react";
import ElevatorDoor from "../ElevatorDoor/ElevatorDoor";
import "./Elevator.css";
import Button from "@material-ui/core/Button";

class Elevator extends Component {
  constructor() {
    super();
    this.state = {
      currentFloor: 1,
      floors: [0, 1, 2, 3, 4, 5],
      message: ""
    };
    this.floorHandler = this.floorHandler.bind(this);
    this.emergencyMessage = this.emergencyMessage.bind(this);
    this.emergencyResolved = this.emergencyResolved.bind(this);
  }

  floorHandler(destinationFloor) {
    if (destinationFloor === this.state.currentFloor) {
      console.log("You are already on that floor!");
    } else if (destinationFloor > this.state.currentFloor) {
      this.setState({ currentFloor: destinationFloor }, () =>
        console.log(this.state.currentFloor)
      );
    } else if (destinationFloor < this.state.currentFloor) {
      this.setState({ currentFloor: destinationFloor }, () =>
        console.log(this.state.currentFloor)
      );
    }
  }

  emergencyMessage() {
    this.setState({
      message: "The police have been notified! Remain calm"
    });
    console.log("The police have been notified! Remain calm");
  }

  emergencyResolved() {
    this.setState({
      message: ""
    });
    console.log("The police have been notified! Remain calm");
  }

  render() {
    return (
      <div className="elevator__parentContainer">
        <div className="elevator__spaceOverElevator">
          <div id="elevator__currentFloor">
            <h3>{this.state.message}</h3>
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
              onClick={() => this.floorHandler(5)}
            >
              5
            </Button>
            <Button
              variant="contained"
              size="small"
              style={{ borderRadius: "50%" }}
              onClick={() => this.floorHandler(4)}
            >
              4
            </Button>
            <Button
              variant="contained"
              size="small"
              style={{ borderRadius: "50%" }}
              onClick={() => this.floorHandler(3)}
            >
              3
            </Button>
            <Button
              variant="contained"
              size="small"
              style={{ borderRadius: "50%" }}
              onClick={() => this.floorHandler(2)}
            >
              2
            </Button>
            <Button
              variant="contained"
              size="small"
              style={{ borderRadius: "50%" }}
              onClick={() => this.floorHandler(1)}
            >
              1
            </Button>
            <Button
              variant="contained"
              size="small"
              style={{ borderRadius: "50%" }}
              onClick={() => this.floorHandler(0)}
            >
              0
            </Button>
            <Button
              variant="contained"
              size="small"
              style={{ borderRadius: "50%", backgroundColor: "red" }}
              onClick={() => this.emergencyMessage()}
            >
              EMERGENCY
            </Button>
            <Button
              variant="contained"
              size="small"
              style={{ borderRadius: "50%", backgroundColor: "green" }}
              onClick={() => this.emergencyResolved()}
            >
              EMERGENCY RESOLVED
            </Button>
          </div>
        </div>

        <div className="elevator__floor" />
      </div>
    );
  }
}

export default Elevator;
