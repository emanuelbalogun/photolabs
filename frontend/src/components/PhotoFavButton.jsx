import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton(props) {
   return (
    
    <div className="photo-list__fav-icon" onClick={() => props.handleFavorite(props.id)}>
      <FavIcon displayAlert={""} selected={props.favoriteList.includes(props.id)} />
      <div className="photo-list__fav-icon-svg"></div>
    </div>
  );
}

export default PhotoFavButton;
