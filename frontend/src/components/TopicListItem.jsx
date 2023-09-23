import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  return (
    <div className="topic-list__item" onClick={()=> props.onTopicSelect(props.topic.id)}>
      {/* <a href={props.category.id}>{props.category.title}</a> */}
      {/* <span key={props.category.id} onClick={()=>props.onTopicSelect(props.category.id)}>{props.category.title}</span> */}
      <span>{props.topic.title}</span>
    </div>
  );
};

export default TopicListItem;
