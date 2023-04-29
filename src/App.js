import React from "react";
import "./App.css";
import Counter from "./Components/Counter";
import CounterDemo from "./Components/CounterDemo";
import DemoComponent from "./Components/DemoComponent";
import Hello from "./Components/Hello";
import Welcome from "./Components/Welcome";

class App extends React.Component {
  render() {
    const person = {
      firstName: "Json",
    };
    console.log(this.props);
    return (
      <div className={"App"}>
        {/* <Welcome></Welcome> */}
        {/* <Welcome
          text={"Hello React World!!"}
          name={"sarthak vaidya"}
          courseName={"Javascript"}
          counter={1000}
          nameArr={["sarthak", "dinesh", "ganesh", "mahesh", "suresh"]}
          person={person}
        /> */}

        {/* <Welcome
          text={"Hello React World!!"}
          name={"sarthak vaidya"}
          courseName={"Javascript"}
          counter={1000}
          nameArr={["sarthak", "dinesh", "ganesh", "mahesh", "suresh"]}
          person={person}
        >
           component composition 
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available
          </p>
        </Welcome> */}

        {/* <Hello /> */}
        {/* <DemoComponent /> */}
        <CounterDemo
          message={"Welcome to counter application"}
          courseName={"javascript"}
        />
      </div>
    );
  }
}
export default App;
