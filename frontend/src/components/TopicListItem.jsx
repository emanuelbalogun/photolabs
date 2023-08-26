import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  return (
    <div className="topic-list__item">
      <span>{props.category.slug}</span>
      {/* <span>{props.category.title}</span> */}
    </div>
  );
};

export default TopicListItem;
