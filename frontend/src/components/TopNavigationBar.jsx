import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from "components/TopicList";
import FavBadge  from './FavBadge';
const TopNavigation = (props) => {
  
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList photos ={props.topics}/>
      <FavBadge favoriteList={props.favoriteList}/>
    </div>
  )
}

export default TopNavigation;