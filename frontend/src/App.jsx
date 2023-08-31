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
    if (setsimilarPhotos.length > 0) {
      setsimilarPhotos([]);
    }
    const result = photos.filter((id) => id === photoId);
    setsimilarPhotos(result);
    return;
  };
  //console.log(handleChosenPhoto(1));

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        handleFavorite={handleFavorite}
        favoriteList={favoriteList}
      />
      <PhotoDetailsModal photos={photos} similarPhotos={similarPhotos} handleChosenPhoto ={handleChosenPhoto} favoriteList={favoriteList} />
    </div>
  );
};

export default App;
