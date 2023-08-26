import React from "react";

import PhotoListItem from "./components/PhotoListItem";
import "./App.scss";

import PhotoList from "components/PhotoList";
import TopicList from "components/TopicList";

// Note: Rendering a single component to build components in isolation
const App = () => {
  
  return (
    <div className="App">
      <TopicList/>
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
