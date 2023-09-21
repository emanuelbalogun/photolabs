import  {  useState } from "react";
import photos from "mocks/photos";

export default function useApplicationData(initial) {
  const [favoriteList, setFavoriteList] = useState(initial);
  const [similarPhotos, setsimilarPhotos] = useState(initial);
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

  return {
    favoriteList,
    similarPhotos,
    handleFavorite,
    handleChosenPhoto
  }
}

