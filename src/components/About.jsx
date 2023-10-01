import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent constuctor");
  }

  componentDidMount(){
    console.log("parent const did mount");
  }
  render() {
    console.log("parent render");
    return (
      <div>
        <h2>About</h2>
        <h2>This is Namaste React component</h2>
        <User name={"Vjay pardhu"} />
        <UserClass name={"firstChild"} location={"Hyderabad"} />
        <UserClass name={"secondChild"} location={"India"} />
      </div>
    );
  }
}

export default About;
