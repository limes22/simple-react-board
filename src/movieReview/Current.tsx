import React, { Fragment, useEffect } from "react";
import { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ReactHtmlParser from "react-html-parser";
import { ContextPluginInterface } from "@ckeditor/ckeditor5-core/src/contextplugin";

interface CurrentProps {
  setViewCurrent: Function;
  viewCurrent: any;
}

export const Current = ({ viewCurrent, setViewCurrent }: CurrentProps) => {
 
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
