import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import photos from 'mocks/photos';

const HomeRoute = (props) => {
  return (
    <div className="home-route">
      <TopNavigation topics ={props.topics} favoriteList={props.favoriteList}/>
      <PhotoList photos={props.photos} handleFavorite={props.handleFavorite} favoriteList={props.favoriteList}/>
    </div>
  );
};

export default HomeRoute;
