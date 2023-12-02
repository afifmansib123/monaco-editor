import logo from './logo.svg';
import './App.css';
import { Editor } from '@monaco-editor/react';
import { useState } from 'react';

const files = {
  "script.py" : {
    name : "script.py",
    language : "python",
    value : "this is a python text",
  },
  "index.html": {
    name : "index.html",
    language : "html",
    value : "<div> </div>"
  }
}



function App() {
  const [filesname, setfilename] = useState("script.py")
  
  const [htmlcontent, sethtmlcontent] = useState('')

  const handlefilechange = () => {
    setfilename(filesname)
    sethtmlcontent(files[filesname].value)
  }

  const handleeditorchange = (value) => {
    sethtmlcontent(value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={()=>{handlefilechange("index.html")}}>Swich to HTML</button>
        <button onClick={()=>{handlefilechange("script.py")}}>Swich to HTML</button>

        <button onClick={()=>{sethtmlcontent(htmlcontent)}}>
          Render HTML
        </button>
        <div dangerouslySetInnerHTML={{__html : htmlcontent}}>

        </div>
        <Editor
        height="100vh"
        width="100%"
        theme='vs-dark'
        path={files[filesname].name}
        defaultLanguage={files[filesname].language}
        defaultValue={files[filesname].value}
        onChange={handleeditorchange}
        ></Editor>
      </header>
    </div>
  );
}

export default App;
