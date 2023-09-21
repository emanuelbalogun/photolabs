import React from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import photos from "mocks/photos";
import topics from "mocks/topics";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import  useApplicationData from "./hooks/useApplicationData.jsx";


// };
// Note: Rendering a single component to build components in isolation
const App = () => {
  const {favoriteList,
    similarPhotos,
    handleFavorite,
    handleChosenPhoto} = useApplicationData([]);
    
  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        handleFavorite={handleFavorite}
        handleChosenPhoto={handleChosenPhoto}
        favoriteList={favoriteList}
      />
      {similarPhotos.length > 0 && (
        <PhotoDetailsModal
          photos={photos}
          similarPhotos={similarPhotos}
          handleChosenPhoto={handleChosenPhoto}
          handleFavorite={handleFavorite}
          favoriteList={favoriteList}
        />
      )}
    </div>
  );
};

export default App;
