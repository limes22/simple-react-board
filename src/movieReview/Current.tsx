import React, { Fragment } from "react";
import { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ReactHtmlParser from "react-html-parser";
import { ContextPluginInterface } from "@ckeditor/ckeditor5-core/src/contextplugin";

interface CurrentProps {
  viewCurrent: any;
}

export const Current = ({ viewCurrent }: CurrentProps) => {
  
  return (
    <>
      <div>내용</div>
      {viewCurrent.map((element: any, idx: number) => (
          <div>
            <div key={idx}>{ReactHtmlParser(element.content)}</div>
          </div>
      ))}
    </>
  );
};

export default Current;
