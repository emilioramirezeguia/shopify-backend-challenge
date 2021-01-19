import React, { useState } from "react";
import axios from "axios";
import { PickerOverlay } from "filestack-react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState(false);
  const [images, setImages] = useState([]);

  const openPicker = () => {
    setDisplay(true);
  };

  const addImage = (imageURL) => {
    const image = {
      url: imageURL,
    };

    axios
      .post("http://localhost:5000/images", image)
      .then((response) => {
        setImages([...images, response.data.image]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteImage = (imageID) => {
    axios
      .delete(`http://localhost:5000/images/${imageID}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>Upload images</p>
        <button onClick={openPicker}>Click me!</button>
        {display && (
          <PickerOverlay
            apikey={process.env.REACT_APP_FILESTACK_API_KEY}
            onSuccess={(response) => addImage(response.filesUploaded[0].url)}
          />
        )}
        {images.length > 0 &&
          images.map((image) => {
            return (
              <div key={image.id}>
                <img src={image.url} alt="" />
                <button onClick={() => deleteImage(image.id)}></button>
              </div>
            );
          })}
      </header>
    </div>
  );
}

export default App;
