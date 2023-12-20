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

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "name",
        location: "location",
        twitter_username: "@twitter",
        avatar_url: "nan",
      },
    };
    // console.log(this.props.name+" child constructor");
  }

   async componentDidMount() {
    // console.log(this.props.name+" child componentDidMount");
    const data = await fetch(`https://api.github.com/users/vijaynaidu16`);
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    // this.timer = setInterval(() => {
    //   console.log("set interval ");
    // }, 1000);
  }

  componentDidUpdate(){
    // console.log("componentDidUpdate");

  }
  componentWillUnmount(){
    // clearInterval(this.timer);
    // console.log("componentWillUnmount");
  }
  render() {
    const { name, location, twitter_username , avatar_url} = this.state.userInfo;
    // console.log(this.props.name+" child render");
    return (
      <div className="flex flex-col justify-center items-center">
        <img className="w-[200px] rounded-[50%]" src={avatar_url}/>
        <h2 className="font-bold">{name}</h2>
        <h2>{location}</h2>
        <h2>{twitter_username}</h2>
      </div>
    );
  }
}

export default UserClass;
