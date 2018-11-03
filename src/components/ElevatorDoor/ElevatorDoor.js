import React, { Component } from "react";
import "./ElevatorDoor.css";
import Button from "@material-ui/core/Button";

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
        <Button
          onClick={this.doorHandler}
          variant="contained"
          size="small"
          style={{ borderRadius: "50%", height: "10vh" }}
        >
          Open / Close
        </Button>
        <div className="elevatorDoor__elevator">
          <div
            className={
              this.state.doorOpen
                ? "elevatorDoor__doorOpen"
                : "elevatorDoor__doorClosed"
            }
          />
        </div>

        {/* <b>{this.state.currentFloor}</b> */}
        {/* <h1> Current Floor: </h1> */}
      </div>
    );
  }
}

export default ElevatorDoor;
