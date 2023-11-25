// import React from "react";
// class UserClass extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       userInfo: {
//         name: "userName",
//         location: "default",
//         avatar_url:"https://dummy-photo.com",
//       },
//     };
    // console.log(this.props.name + "child constuctor");
//   }
//   async componentDidMount() {
    // console.log(this.props.name +"child const did mount");
//     const data = await fetch(`https://api.github.com/users/vijaynaidu16`);
//     const json = await data.json();

//     this.setState({
//       userInfo: json,
//     });
// console.log(json);
//   }
//   render() {
    // console.log(this.props.name +"child render");

//     const { name, location, avatar_url } = this.state.userInfo;
//     return (
//       <div className="user-card">
//         <img src={avatar_url}></img>
//         <h2>Name :{name} </h2>
//         <h2>location: {location} </h2>
//         <h2>Contact: @vijaypardhu_16</h2>
//       </div>
//     );
//   }
// }
// export default UserClass;

import React from "react";

class UserClass extends React.Component{

  constructor(props){
    super(props);
    this.state= {
      userInfo: {
        name: "name",
        location: "location",
      }
    }
    // console.log(this.props.name+" child constructor");
  }

  async componentDidMount(){
    // console.log(this.props.name+" child componentDidMount");
    const data = await fetch(`https://api.github.com/users/kunal-kushwaha`);
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    })
  }
  render(){
    const {name, location} = this.state.userInfo;
    // console.log(this.props.name+" child render");

    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
        <h2>twitter: @vijaynaidu16</h2>
      </div>
    )
  }
}

export default UserClass;
