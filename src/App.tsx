import React from "react";
import { useState } from "react";
import "./App.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { moveEmitHelpers } from "typescript";
import ReactHtmlParser from 'node-html-parser';

interface movieContent {
  movieContent: {title? : any, content?: any},
}

interface viewContent {
  movieContent: movieContent[],
}

export function App()  {

  const [movieContent, setMovieContent] = useState({
    title:"",
    content:""
  });

  const [viewContent, setViewContent] = useState({
    title:"",
    content:""
  });

  const getValue = (e: any) => {
    const { name, value } = e.target;
    setMovieContent({
      ...movieContent,
      [name]: value,
    });
    console.log(movieContent);
  };

  return (
    <div className="App">
      <h1>Movie Review</h1>
      <div className="movie-container">
        {/* {viewContent.map((element : any) =>
          <div>
            <h2>{element.title}</h2>
            <div>
              {ReactHtmlParser(element.content)}
            </div>
          </div>)} */}
        <h2>제목</h2>
        <div>내용</div>
      </div>
      <div className="form-wrapper">
        <input
          className="title-input"
          type="text"
          placeholder="제목"
          onChange={getValue}
          name="title"
        />
        <CKEditor
          editor={ClassicEditor}
          data="<p>Hello from CKEditor 5!</p>"
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
            setMovieContent({
              ...movieContent,
              content: data,
            });
            console.log(movieContent);
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />
      </div>
      <button
        className="submit-button"
        // onClick={() => {
        //   setViewContent(viewContent.concat({ ...movieContent }));
        // }}
      >
        입력
      </button>
    </div>
  );
};

export default App;
