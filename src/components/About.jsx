import React, { Component } from "react";
import Image from "./Carousel";

class About extends Component {
  render() {
    return (
      <div>
        <div>This is a parent component</div>
        <Image />
      </div>
    );
  }
}

export default About;
