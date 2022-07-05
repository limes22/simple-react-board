import React, { Fragment } from "react";
import { useState } from "react";
import "./App.css";
import Create from "./movieReview/Create";
import List from "./movieReview/List";
import Current from "./movieReview/Current";

export const App: React.FC = () => {
  const [viewContent, setViewContent] = useState<any>([]);
  const [viewCurrent, setViewCurrent] = useState<any>([]);
  const [isshow, setisShow] = React.useState(true);
  const myOnClick = () => {
    setisShow(!isshow);
  };
  return (
    <>
      <div className="App">
        <List viewContent={viewContent} setViewCurrent={setViewCurrent} viewCurrent={viewCurrent} myOnClick={myOnClick}/>
        {isshow? <Current viewContent={viewContent}/> : null}
        {/* <button onClick={myOnClick}>on/off</button> */}
        <Create setViewContent={setViewContent} viewContent={viewContent} />
      </div>
    </>
  );
};

export default App;
