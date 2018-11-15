import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class BaseButton extends Component {
  render() {
    return (
      <Button
        variant="contained"
        size="small"
        style={{
          borderRadius: this.props.baseButtonBorderRadius
            ? this.props.baseButtonBorderRadius
            : "10%",
          paddingTop: "10px",
          margin: "5px",
          border: "solid black 1px",
          boxShadow: "5px 5px 5px black",
          backgroundColor: this.props.color
        }}
        onClick={this.props.clickAction}
      >
        {this.props.value}
      </Button>
    );
  }
}

export default BaseButton;
