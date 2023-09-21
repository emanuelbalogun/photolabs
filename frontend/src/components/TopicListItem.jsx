import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  return (
    <div className="topic-list__item">
      <a href={props.category.slug}>{props.category.title}</a>
      {/* <span>{props.category.title}</span> */}
    </div>
  );
};

export default TopicListItem;
