import React, { useState } from "react";
import { PickerOverlay } from "filestack-react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState(false);
  const openPicker = () => {
    setDisplay(true);
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>Upload images</p>
        <button onClick={openPicker}>Click me!</button>
        {display && (
          <PickerOverlay apikey={process.env.REACT_APP_FILESTACK_API_KEY} />
        )}
      </header>
    </div>
  );
}

export default App;
