import  {  useReducer } from "react";
import photos from "mocks/photos";

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
}

export default function useApplicationData(initial) {
  function reducer(state, action) {
    switch(action.type){
      case ACTIONS.FAV_PHOTO_ADDED:
          if (state.favoriteList.includes(action.id)) {
          const favoriteListCopy = state.favoriteList.filter((id) => id != action.id);
          return {...state,favoriteList: favoriteListCopy};
        } 
        
    return {...state,favoriteList:[...state.favoriteList,action.id ]};

    case ACTIONS.SELECT_PHOTO:
    let similarphoto = [];
    if (state.similarPhotos.length > 0 || action.id === 0) {
      state.similarPhotos = similarphoto;
      if (action.id === 0) return {...state,similarPhotos:similarphoto};
    }
    const result = photos.map((photo) => {
      if (photo.id === action.id) {
        similarphoto.push({photo,...photo.similar_photos});
      }
    });

   return {...state,similarPhotos: similarphoto};
    }
    return {...state};
  }
  const initialState = {
    favoriteList: initial,
    similarPhotos: initial
  };
  const [state, dispatch] = useReducer(reducer,initialState);
 
  const handleFavorite = (photoId) => {
    dispatch({type : ACTIONS.FAV_PHOTO_ADDED, id : photoId})   
  };

  const handleChosenPhoto = (photoId) => {
    dispatch({type : ACTIONS.SELECT_PHOTO, id : photoId})   
  };

  const favoriteList = state.favoriteList;
  const similarPhotos =state.similarPhotos;

  return {
    favoriteList,
    similarPhotos,
    handleFavorite,
    handleChosenPhoto
  }
}

