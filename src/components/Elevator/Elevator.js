import React, { Component } from "react";
import ElevatorDoor from "../ElevatorDoor/ElevatorDoor";
import "./Elevator.css";
import Button from "@material-ui/core/Button";

class Elevator extends Component {
  constructor() {
    super();
    this.state = {
      currentFloor: 1,
      destinationFloor: 0,
      message: ""
    };
    this.floorHandler = this.floorHandler.bind(this);
    this.floorHandler2 = this.floorHandler2.bind(this);
    this.emergencyMessage = this.emergencyMessage.bind(this);
    this.resetMessage = this.resetMessage.bind(this);
    this.interval = this.interval.bind(this);
    this.stopFunction = this.stopFunction.bind(this);
    this.setDestinationFloor = this.setDestinationFloor.bind(this);
  }

  /*
  * Site used to clarify setInterval/clearinterval
  * https://medium.com/@650egor/react-30-day-challenge-day-1-simple-timer-df85d0867553
  */
  interval() {
    this.timer = setInterval(this.floorHandler2.bind(this), 1000);
  }

  stopFunction() {
    clearInterval(this.timer);
  }

  floorHandler() {
    this.interval();
  }

  setDestinationFloor(des) {
    this.setState({ destinationFloor: des });
  }

  floorHandler2() {
    if (this.state.currentFloor === this.state.destinationFloor) {
      this.setState({
        message:
          "You have arrived at your destination Floor: " +
          this.state.destinationFloor
      });

      this.stopFunction();
      return;
    } else if (this.state.currentFloor < this.state.destinationFloor) {
      this.setState({ currentFloor: this.state.currentFloor + 1 });
    } else {
      this.setState({ currentFloor: this.state.currentFloor - 1 });
    }
  }

  emergencyMessage() {
    this.setState({
      message: "The police have been notified! Remain calm"
    });
  }

  resetMessage() {
    this.setState({
      message: ""
    });
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
              onClick={() => {
                this.setDestinationFloor(5);
                this.floorHandler();
              }}
            >
              5
            </Button>
            <Button
              variant="contained"
              size="small"
              style={{ borderRadius: "50%" }}
              onClick={() => {
                this.setDestinationFloor(4);
                this.floorHandler();
              }}
            >
              4
            </Button>
            <Button
              variant="contained"
              size="small"
              style={{ borderRadius: "50%" }}
              onClick={() => {
                this.setDestinationFloor(3);
                this.floorHandler();
              }}
            >
              3
            </Button>
            <Button
              variant="contained"
              size="small"
              style={{ borderRadius: "50%" }}
              onClick={() => {
                this.setDestinationFloor(2);
                this.floorHandler();
              }}
            >
              2
            </Button>
            <Button
              variant="contained"
              size="small"
              style={{ borderRadius: "50%" }}
              onClick={() => {
                this.setDestinationFloor(1);
                this.floorHandler();
              }}
            >
              1
            </Button>
            <Button
              variant="contained"
              size="small"
              style={{ borderRadius: "50%" }}
              onClick={() => {
                this.setDestinationFloor(0);
                this.floorHandler();
              }}
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
              onClick={() => this.resetMessage()}
            >
              RESET
            </Button>
          </div>
        </div>

        <div className="elevator__floor" />
      </div>
    );
  }
}

export default Elevator;
