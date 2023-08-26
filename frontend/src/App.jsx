import React from "react";

import PhotoListItem from "./components/PhotoListItem";
import "./App.scss";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";


// Note: Rendering a single component to build components in isolation
const App = () => {
  
  return (
    <div className="App">
      <TopNavigation/>
      <PhotoList/>
      {/* <PhotoListItem
        imagesource = {sampleDataForPhotoListItem.imageSource}
        profile = {sampleDataForPhotoListItem.profile}
        username = {sampleDataForPhotoListItem.username}
        location = {sampleDataForPhotoListItem.location}
      /> */}
    </div>
  );
};

export default App;
