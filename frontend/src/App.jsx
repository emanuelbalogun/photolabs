import React, { useEffect, useState } from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import photos from "mocks/photos";
import topics from "mocks/topics";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [favoriteList, setFavoriteList] = useState([]);
  const [similarPhotos, setsimilarPhotos] = useState([]);
  const handleFavorite = (photoId) => {
    if (favoriteList.includes(photoId)) {
      const favoriteListCopy = favoriteList.filter((id) => id != photoId);
      setFavoriteList(favoriteListCopy);
      return;
    }

    setFavoriteList([...favoriteList, photoId]);
  };

  const handleChosenPhoto = (photoId) => {
    let similarphoto = [];
    if (setsimilarPhotos.length > 0 || photoId === 0) {
      setsimilarPhotos([]);
      if (photoId === 0) return;
    }
    const result = photos.map((photo) => {
      if (photo.id === photoId) {
        similarphoto.push({photo,...photo.similar_photos});
      }
    });

    setsimilarPhotos(similarphoto);
    return;
  };
    
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
