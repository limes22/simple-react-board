import React from "react";
import ReactHtmlParser from "react-html-parser";

interface CurrentProps {
  viewCurrent: any;
}

export const Current = ({ viewCurrent }: CurrentProps) => {
  return (
    <>
      <div>내용</div>
      <div>
        <div>{ReactHtmlParser(viewCurrent.content)}</div>
      </div>
    </>
  );
};

export default Current;
