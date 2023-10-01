import { useState } from "react";

const User = (props) => {
  const { name } = props;
  const [count] = useState(0);
  return (
    <div className="user-card">
      <h2>Funcational components</h2>
      <h2>Count: {count}</h2>
      <h2>Name: {name} </h2>
      <h3>Location: Hyderabad</h3>
      <h3>contact: @vijaynaidu_16</h3>
    </div>
  );
};

export default User;
