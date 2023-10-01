import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 0,
    };
    console.log(this.props.name + "child constuctor");
  }
  componentDidMount() {
    console.log(this.props.name +"child const did mount");
  }
  render() {
    console.log(this.props.name +"child render");

    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h2>Count: {count}</h2>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            })
          }
        >
          Count ++
        </button>
        <h2>class based components</h2>
        <h2>Name :{name} </h2>
        <h2>location: {location} </h2>
        <h2>Contact: @vijaypardhu_16</h2>
      </div>
    );
  }
}
export default UserClass;
