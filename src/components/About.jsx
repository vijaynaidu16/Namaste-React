import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

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
        <h2 className="font-bold">About the developer</h2>
        <div>
          Logged in User
          <UserContext.Consumer>
            {({loggedInUser}) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <UserClass/>
      </div>
    );
  }
}

export default About;
