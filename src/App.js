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
  const file = files[filesname]
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={()=>{setfilename("index.html")}}>Swich to HTML</button>
        <button onClick={()=>{setfilename("script.py")}}>Swich to HTML</button>
        <Editor
        height="100vh"
        width="100%"
        theme='vs-dark'
        path={file.name}
        defaultLanguage={file.language}
        defaultValue={file.value}
        ></Editor>
      </header>
    </div>
  );
}

export default App;
