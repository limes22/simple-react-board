import React from 'react';
import './App.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function App() {
  return (
    <div className="App">
      <h1>Movie Review</h1>
      <div className='movie-container'>
        <h2>제목</h2>
        <div>
          내용
        </div>
      </div>
      <div className='form-wrapper'>
        <input className="title-input" type='text' placeholder='제목' />
        <CKEditor
          editor={ClassicEditor}
          data="<p>Hello from CKEditor 5!</p>"
          onReady={(editor :any) => {
            // You can store the "editor" and use when it is needed.
            console.log('Editor is ready to use!', editor);
          }}
          onChange={(event :any , editor :any) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
          onBlur={(event :any, editor :any) => {
            console.log('Blur.', editor);
          }}
          onFocus={(event :any, editor :any) => {
            console.log('Focus.', editor);
          }}
        />
      </div>
      <button className="submit-button">입력</button>
    </div>
  );
}

export default App;
