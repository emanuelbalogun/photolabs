import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";
import PhotoFavButton from "components/PhotoFavButton";
//import photos from 'mocks/photos';
const PhotoDetailsModal = (props) => {
  
  let similarphotos = [];

  Object.values(props.similarPhotos).map((value) => {
    Object.values(value).map((value1) => {
      similarphotos.push(value1);
    });
  });
  similarphotos = similarphotos.filter(
    (photo) => photo.id != props.similarPhotos[0].photo.id
  );

  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={() => props.handleSelectedPhoto(0)}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className="photo-details-modal__images">
        <PhotoFavButton
          id={props.similarPhotos[0].photo.id}
          handleFavorite={props.handleFavorite}
          favoriteList={props.favoriteList}
        />
        <img
          src={props.similarPhotos[0].photo.urls.full}
          className="photo-details-modal__image"
          onClick={() => props.handleSelectedPhoto(props.photos.id)}
        />
        <div className="photo-list__user-details">
          <img
            src={props.similarPhotos[0].photo.user.profile}
            className="photo-list__user-profile"
          />
          <div>
            <h1 className="photo-list__user-info">
              {props.similarPhotos[0].photo.user.username}
            </h1>
            <h1 className="photo-list__user-location photo-list__user-info">
              {props.similarPhotos[0].photo.location.city},{" "}
              {props.similarPhotos[0].photo.location.country}
            </h1>
          </div>
        </div>
      </div>

      <PhotoList
        photos={similarphotos}
        handleSelectedPhoto={props.handleSelectedPhoto}
        handleFavorite={props.handleFavorite}
        favoriteList={props.favoriteList}
      />
    </div>
  );
};

export default PhotoDetailsModal;
