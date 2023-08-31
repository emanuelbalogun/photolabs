import React, { useState } from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  /* Insert React */
  return (
    <div className="photo-list__item ">
      <PhotoFavButton id= {props.id} handleFavorite = {props.handleFavorite} favoriteList={props.favoriteList}/>
      <img src={props.photoCard.urls.full} className="photo-list__image" />
      <div className="photo-list__user-details">
        <img src={props.photoCard.user.profile} className="photo-list__user-profile" />
        <div>
          <h1 className="photo-list__user-info">{props.photoCard.user.username}</h1>
          <h1 className="photo-list__user-location photo-list__user-info">
            {props.photoCard.location.city}, {props.photoCard.location.country}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
