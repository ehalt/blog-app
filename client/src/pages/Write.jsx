import React, { useState } from 'react'
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

const Write = () => {
  const [value, setValue] = useState('');
  console.log(value);
  return (
    <div className='write'>
      <div className="content">
        <input type="text" placeholder="title" />
        <div className="editorContainer">
          <ReactQuill className='editor' theme='snow' value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <div className="pub">
            <h1>Publish</h1>
            <div>
              <span>
              <b>Status: </b> Draft
            </span>
            <br />
            <span>
              <b>Visibility: </b> public
            </span>
            </div>
          </div>
          <div className="up">
            <input style={{display: "none"}} type="file" name='' id='file' />
            <label htmlFor="file">Upload Image</label>
          </div>
          <div className="buttons">
            <button>Save as a Draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">

          <h1>Category</h1>
          <div className='radio-item'>
            <input type="radio" name='cat' value="art" id='art' />
            <label htmlFor="art">Art</label>
          </div>
          <div className='radio-item'>
            <input type="radio" name='cat' value="science" id='science' />
            <label htmlFor="science">Science</label>
          </div>
          <div className='radio-item'>
            <input type="radio" name='cat' value="technology" id='technology' />
            <label htmlFor="technlogoy">Technology</label>
          </div>
          <div className='radio-item'>
            <input type="radio" name='cat' value="cinema" id='cinema' />
            <label htmlFor="cinema">Cinema</label>
          </div>
          <div className='radio-item'>
            <input type="radio" name='cat' value="design" id='design' />
            <label htmlFor="design">Design</label>
          </div>
          <div className='radio-item'>
            <input type="radio" name='cat' value="food" id='food' />
            <label htmlFor="food">Food</label>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Write