import React, { Fragment } from "react";
import { useState } from "react";
import "./App.css";
import Create from "./movieReview/Create";
import List from "./movieReview/List";
import Current from "./movieReview/Current";

export const App: React.FC = () => {
  const [viewContent, setViewContent] = useState<any>([]);
  const [viewCurrent, setViewCurrent] = useState<any>(undefined);

  return (
    <>
      <div className="App">
        <List viewContent={viewContent}  viewCurrent={viewCurrent} setViewCurrent={setViewCurrent} />
        {viewCurrent? <Current viewCurrent={viewCurrent} /> : null}
        <Create setViewContent={setViewContent} viewContent={viewContent} />
      </div>
    </>
  );
};

export default App;
