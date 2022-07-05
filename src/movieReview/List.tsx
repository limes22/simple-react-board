import React, { Fragment } from "react";
import { useState } from "react";
import ReactHtmlParser from "react-html-parser";

interface ListProps {
  viewContent: any;
  viewCurrent: any;
  setViewCurrent: Function;
  myOnClick: Function;
}

export const List = ({
  viewContent,
  viewCurrent,
  setViewCurrent,
  myOnClick,
}: ListProps) => {
  return (
    <>
      <h1>Movie Review</h1>
      <div className="movie-container">
        {viewContent.map((element: any, idx: any) => (
          <Fragment key={idx}>
            <div>
              <h2
                onClick={() => {
                  myOnClick(viewCurrent.concat({ ...viewContent }));
                }}
              >
                {element.title}
              </h2>
              {/* <div>{ReactHtmlParser(element.content)}</div> */}
            </div>
          </Fragment>
        ))}
        <h2>제목</h2>
        {/* <div>내용</div> */}
      </div>
    </>
  );
};

export default List;
