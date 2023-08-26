import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton() {
  const [getStyle, setStyle] = useState(false);

  const toggle = () => {
    setStyle(!getStyle);
  };
  return (
    //photo-list--fav-icon
    <div className="photo-list__fav-icon" onClick={() => toggle()}>
      <FavIcon displayAlert={""} selected={getStyle}  />
      <div className="photo-list__fav-icon-svg"></div>
    </div>
  );
}

export default PhotoFavButton;
