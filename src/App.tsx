import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Create from "./movieReview/Create";
import List from "./movieReview/List";
import Current from "./movieReview/Current";
import axios from "axios";

const App: React.FC = () => {
  const [viewContent, setViewContent] = useState<any>([]);
  const [viewCurrent, setViewCurrent] = useState<any>(undefined);

  const getPosts = async () => {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/posts?userId=1"
    );
    setViewContent(res.data);
  };
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <div className="App">
        <List
          viewContent={viewContent}
          viewCurrent={viewCurrent}
          setViewCurrent={setViewCurrent}
        />
        {viewCurrent ? <Current viewCurrent={viewCurrent} /> : null}
        <Create setViewContent={setViewContent} viewContent={viewContent} />
      </div>
    </>
  );
};

export default App;
