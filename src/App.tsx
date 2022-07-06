import React, { Fragment } from "react";
import { useState } from "react";
import "./App.css";
import Create from "./movieReview/Create";
import List from "./movieReview/List";
import Current from "./movieReview/Current";

export const App: React.FC = () => {
  const [viewContent, setViewContent] = useState<any>([]);
  const [viewCurrent, setViewCurrent] = useState<any>([]);

  return (
    <>
      <div className="App">
        <List viewContent={viewContent}  setViewCurrent={setViewCurrent}  />
        <Current viewCurrent={viewCurrent} /> 
        <Create setViewContent={setViewContent} viewContent={viewContent} />
      </div>
    </>
  );
};

export default App;
