import React, { Fragment } from "react";

interface ListProps {
  viewContent: any;
  setViewCurrent: Function;
  setShow: Function;
  isShow: boolean;
}

export const List = ({
  viewContent,
  setViewCurrent,
  setShow,
  isShow,
}: ListProps) => {
  return (
    <>
      <h1>Movie Review</h1>
      <div className="movie-container">
        <h2>제목</h2>
        {viewContent.map((element: any, idx: number) => (
          <Fragment key={idx}>
            <div>
              <h2
                onClick={() => {
                  setViewCurrent(element);
                  setShow(!isShow);
                }}
              >
                {element.title}
              </h2>
              {/* <div>{ReactHtmlParser(element.content)}</div> */}
            </div>
          </Fragment>
        ))}

        {/* <div>내용</div> */}
      </div>
    </>
  );
};

export default List;
