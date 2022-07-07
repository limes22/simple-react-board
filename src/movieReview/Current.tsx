import React from "react";
import ReactHtmlParser from "react-html-parser";

interface CurrentProps {
  viewCurrent: any;
}

const Current = ({ viewCurrent }: CurrentProps) => {
  return (
    <>
      <div>내용</div>
      <div>
        <div>{ReactHtmlParser(viewCurrent.body)}</div>
      </div>
    </>
  );
};

export default Current;
