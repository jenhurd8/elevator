import React, { Component } from "react";
import ElevatorDoor from "../ElevatorDoor/ElevatorDoor";
import "./Elevator.css";
import Button from "@material-ui/core/Button";

class Elevator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFloor: 1,
      destinationFloor: 0,
      message: "",
      emergencyMessage: ""
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
          "You have arrived at your destination! Floor: " +
          this.state.destinationFloor
      });
      this.stopFunction();
      return;
    } else if (this.state.currentFloor < this.state.destinationFloor) {
      this.setState({ message: "", currentFloor: this.state.currentFloor + 1 });
    } else {
      this.setState({ message: "", currentFloor: this.state.currentFloor - 1 });
    }
  }

  emergencyMessage() {
    this.setState({
      emergencyMessage: "The police have been notified! Remain calm"
    });
  }

  resetMessage() {
    this.setState({
      message: "",
      emergencyMessage: ""
    });
  }

  render() {
    const doorStatus = this.state.currentFloor === this.state.destinationFloor;

    return (
      <div className="elevator__parentContainer">
        <div className="elevator__centeredElevatorAndControlsBox">
          <div className="elevator__spaceOverElevator">
            <div id="elevator__currentFloor">
              <h2>{this.state.emergencyMessage}</h2>
              <h3>{this.state.message}</h3>
            </div>
          </div>

          <div className="elevator__elevator">
            <ElevatorDoor
              doorStatus={doorStatus}
              currentFloor={this.state.currentFloor}
            />
            <div className="elevator__controls">
              <div id="elevator__currentFloorNumber">
                <div id="elevator__floorIndicator">
                  <h3>Current Floor:</h3>
                  <p>{this.state.currentFloor}</p>
                </div>
              </div>
              <div id="elevator__numbers">
                <div className="elevator__halfNumbers2">
                  <Button
                    variant="contained"
                    size="small"
                    style={{
                      borderRadius: "50%",
                      padding: "20px",
                      margin: "5px"
                    }}
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
                    style={{
                      borderRadius: "50%",
                      padding: "20px",
                      margin: "5px"
                    }}
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
                    style={{
                      borderRadius: "50%",
                      padding: "20px",
                      margin: "5px"
                    }}
                    onClick={() => {
                      this.setDestinationFloor(0);
                      this.floorHandler();
                    }}
                  >
                    G0
                  </Button>
                </div>
                <div className="elevator__halfNumbers1">
                  <Button
                    variant="contained"
                    size="small"
                    style={{
                      borderRadius: "50%",
                      padding: "20px",
                      margin: "5px"
                    }}
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
                    style={{
                      borderRadius: "50%",
                      padding: "20px",
                      margin: "5px"
                    }}
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
                    style={{
                      borderRadius: "50%",
                      padding: "20px",
                      margin: "5px"
                    }}
                    onClick={() => {
                      this.setDestinationFloor(3);
                      this.floorHandler();
                    }}
                  >
                    3
                  </Button>
                </div>
              </div>
              <br />
              <Button
                variant="contained"
                size="small"
                style={{
                  backgroundColor: "red",
                  padding: "5px",
                  margin: "5px"
                }}
                onClick={() => this.emergencyMessage()}
              >
                EMERGENCY
              </Button>
              <Button
                variant="contained"
                size="small"
                style={{
                  backgroundColor: "green",
                  padding: "5px",
                  margin: "5px"
                }}
                onClick={() => this.resetMessage()}
              >
                RESET MESSAGES
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Elevator;
