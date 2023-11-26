import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props.name+"parent constuctor");
  }

  componentDidMount(){
    // console.log(this.props.name+"parent const did mount");
  }
  render() {
    // console.log(this.props.name+"parent render");
    return (
      <div>
        <h2>About the developer</h2>
        <UserClass/>
        {/* <UserClass name={"tanuj"} location={"Andhra"}/> */}
        <User name={"tanuj"}/>
      </div>
    );
  }
}

export default About;
