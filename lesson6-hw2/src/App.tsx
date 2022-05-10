import React from "react";
import "./App.css";
import Field from "./components/Field";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Field
          onClick={(i) => console.log("Click on cell with value = " + i)}
          squares={["1", "2", "3", "4", "5", "6", "7", "8", "9"]}
        />
      </header>
    </div>
  );
}

export default App;
