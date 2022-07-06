import React, { Fragment } from "react";

interface ListProps {
  viewContent: any;
  viewCurrent: any;
  setViewCurrent: Function;
}

export const List = ({
  viewContent,
  viewCurrent,
  setViewCurrent,
}: ListProps) => {
  const onClickFunc = (content) => {
      if (content === viewCurrent) {
          setViewCurrent(undefined);
      } else {
          setViewCurrent(content);
      }
  };
  return (
    <>
      <h1>Movie Review</h1>
      <div className="movie-container">
        <h2>제목</h2>
        {viewContent.map((element: any, idx: number) => (
          <Fragment key={idx}>
            <div>
              <h2 onClick={() => onClickFunc(element)}>
                {element.title}
              </h2>
            </div>
          </Fragment>
        ))}
      </div>
    </>
  );
};

export default List;
