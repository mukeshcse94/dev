import React from "react";
import AlbumList from "./AlbumList";
import { BrowserRouter, Route } from "react-router-dom";
import AddAlbum from "./AddAlbum";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UploadImage from "./UploadImage";

function Profiles() {
  return (
    <div>
      <ToastContainer />
      <div className="container">
        <Route path="/" exact component={AlbumList} />
        <Route path="/add" exact component={AddAlbum} />
        <Route path="/upload/:id" exact component={UploadImage} />
      </div>
    </div>
  );
}

export default Profiles;
