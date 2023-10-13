import { Component } from "react";
import "./App.css";
import Person from "./components/Person";

class App extends Component {
  render() {
    return (
      <div className="container content">
        <Person />
      </div>
    );
  }
}

export default App;
