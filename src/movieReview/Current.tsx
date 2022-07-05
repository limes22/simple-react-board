import React, { Fragment } from "react";
import { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ReactHtmlParser from "react-html-parser";
import { ContextPluginInterface } from "@ckeditor/ckeditor5-core/src/contextplugin";

interface CurrentProps {
  viewContent: any;
}

export const Current = ({ viewContent }: CurrentProps) => {
  
  return (
    <>
      <div>내용</div>
      {viewContent.map((element: any, idx: any) => (
        <Fragment key={idx}>
          <div>
            <div>{ReactHtmlParser(element.content)}</div>
          </div>
        </Fragment>
      ))}
    </>
  );
};

export default Current;
