import React, { Fragment } from "react";
import { useState } from "react";

interface ListProps {
  viewContent: any;
  setViewCurrent: Function;
}

export const List = ({ viewContent, setViewCurrent}: ListProps) => {
    const [count, setCount] = useState(0);

    const myOnClick = (element: any, idx: number) => {
        if (count % 2 === 1) {
            setViewCurrent('');
        } else {
            setViewCurrent(element);
        };
        if (idx === idx){
            setCount(count + 1);
        };
    };
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
                      myOnClick(element, idx);
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
