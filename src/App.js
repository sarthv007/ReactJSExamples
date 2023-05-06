import React from "react";
//import "./App.css";
import ConditionalRendingDemo from "./Components/ConditionalRendingDemo";
import Counter from "./Components/Counter";
import CounterDemo from "./Components/CounterDemo";
import DemoComponent from "./Components/DemoComponent";
import EventBindingDemo from "./Components/EventBindingDemo";
import FormComp from "./Components/FormComp";
import Hello from "./Components/Hello";
import ListRenderingComp from "./Components/ListRenderingComp";
import ListwithKey from "./Components/ListwithKey";
import SendDataFromParentToChildAsMethod from "./Components/SendDataFromParentToChildAsMethod";
import TextBoxDemo from "./Components/TextBoxDemo";
import Welcome from "./Components/Welcome";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Welcome to react js!",
    };
  }

  changeMessage = () => {
    this.setState({
      message: "Welcome to js world!",
    });
    //alert("I am from changeMessage called from parent component ");
  };

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
        {/* <CounterDemo
          message={"Welcome to counter application"}
          courseName={"javascript"}
        /> */}

        {/* <TextBoxDemo /> */}
        {/* <EventBindingDemo /> */}
        {/* <SendDataFromParentToChildAsMethod
          message={this.state.message}
          personArr={["sarthak", "ganesh", "amita"]}
          personObject={{ firstName: "sarthak", lastName: "vaidya" }}
          data={null}
          age={undefined}
          changeMessage={this.changeMessage}
        /> */}
        {/* <ConditionalRendingDemo /> */}
        <FormComp />
      </div>
    );
  }
}
export default App;
