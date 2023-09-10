import React from "react";
import ReactDOM from "react-dom/client";

const elem = () =>{
  <span> Span tag</span>
};


const heading = (
    <h1 className="heading">Namaste React🚀</h1>
); 

const HeadingComponent = () => (
  <div>
    {heading}
    <h1 className="Heading">Namaste React🚀 Full course</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);


