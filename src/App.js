import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Container,
  Divider,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
} from "@material-ui/core";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import DeleteIcon from "@material-ui/icons/Delete";
import { PickerOverlay } from "filestack-react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState(false);
  const [images, setImages] = useState([]);

  const togglePicker = () => {
    setDisplay(!display);
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

  const options = {
    maxFiles: 10,
    onClose: togglePicker,
  };
  return (
    <Container disableGutters maxWidth={false}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        p={10}
        bgcolor="info.main"
      >
        <h3>Upload images</h3>
        <Button
          variant="contained"
          color="primary"
          startIcon={<PhotoCameraIcon />}
          onClick={togglePicker}
        >
          Upload
        </Button>
      </Box>
      <Divider light />
      {display && (
        <PickerOverlay
          apikey={process.env.REACT_APP_FILESTACK_API_KEY}
          onSuccess={(response) => addImage(response.filesUploaded[0].url)}
          pickerOptions={options}
        />
      )}
      <GridList>
        {images.length > 0 &&
          images.map((image) => {
            return (
              <GridListTile key={image.id} rows={2}>
                <img src={image.url} alt="" />
                <GridListTileBar
                  actionIcon={
                    <IconButton
                      variant="contained"
                      color="action"
                      onClick={() => deleteImage(image.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  }
                />
              </GridListTile>
            );
          })}
      </GridList>
    </Container>
  );
}

export default App;
