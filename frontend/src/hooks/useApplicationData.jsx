import { useReducer, useEffect } from "react";

export const ACTIONS = {
  GET_PHOTOS_BY_TOPICS: "GET_PHOTOS_BY_TOPICS",
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SELECT_PHOTO: "SELECT_PHOTO",
  DISPLAY_PHOTO_DETAILS: "DISPLAY_PHOTO_DETAILS",
};
const baseUrl = "http://localhost:8001/api";
export default function useApplicationData(initial) {
  useEffect(() => {
    fetch(`${baseUrl}/photos`)
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data })
      );
  }, []);

  useEffect(() => {
    fetch(`${baseUrl}//topics`)
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data })
      );
  }, []);

  const reducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.GET_PHOTOS_BY_TOPICS:
        return { ...state, photoData: action.payload };
      case ACTIONS.SET_TOPIC_DATA:
        return { ...state, topicData: action.payload };
      case ACTIONS.SET_PHOTO_DATA:
        return { ...state, photoData: action.payload };
      case ACTIONS.FAV_PHOTO_ADDED:
        if (state.favoriteList.includes(action.id)) {
          const favoriteListCopy = state.favoriteList.filter(
            (id) => id != action.id
          );
          return { ...state, favoriteList: favoriteListCopy };
        }

        return { ...state, favoriteList: [...state.favoriteList, action.id] };

      case ACTIONS.SELECT_PHOTO:
        let similarphoto = [];
        if (state.similarPhotos.length > 0 || action.id === 0) {
          state.similarPhotos = similarphoto;
          if (action.id === 0) return { ...state, similarPhotos: similarphoto };
        }
        const result = state.photoData.map((photo) => {
          if (photo.id === action.id) {
            similarphoto.push({ photo, ...photo.similar_photos });
          }
        });

        return { ...state, similarPhotos: similarphoto };
    }
    return { ...state };
  };
  
  const initialState = {
    favoriteList: initial,
    similarPhotos: initial,
    photoData: [],
    topicData: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleFavorite = (photoId) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, id: photoId });
  };

  const handleSelectedPhoto = (photoId) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, id: photoId });
  };

  const onTopicSelect = (id) => {
    fetch(`${baseUrl}/topics/photos/${id}`)
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: data })
      );
  };
  const favoriteList = state.favoriteList;
  const similarPhotos = state.similarPhotos;
  const photos = state.photoData;
  const topics = state.topicData;

  return {
    favoriteList,
    similarPhotos,
    handleFavorite,
    handleSelectedPhoto,
    photos,
    topics,
    onTopicSelect,
  };
}
