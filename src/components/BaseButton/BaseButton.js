import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class BaseButton extends Component {
  render() {
    return (
      <Button
        variant="contained"
        size="small"
        style={{
          borderRadius: "50%",
          padding: "20px",
          margin: "5px",
          border: "solid black 1px",
          boxShadow: "5px 10px 5px black"
        }}
        //   onClick={() => this.emergencyMessage()}
      />
    );
  }
}

export default BaseButton;
