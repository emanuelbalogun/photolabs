import React,{useState} from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem"
const sampleDataForTopicList = [
  {
    id: "1",
    slug: "topic-1",
    title: "Nature",
  },
  {
    id: "2",
    slug: "topic-2",
    title: "Travel",
  },
  {
    id: "3",
    slug: "topic-3",
    title: "People",
  },
];

const TopicList = (props) => {

  //const [topic,setTopic] = useState(sampleDataForTopicList);
  
  const topicList = props.topics.map(topic => {
    return <TopicListItem key= {topic.id}  topic={topic}  onTopicSelect={props.onTopicSelect}/>
  });

  return (
    <div className="top-nav-bar__topic-list">
      {topicList}
    </div>
  );
};

export default TopicList;
