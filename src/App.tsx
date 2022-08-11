import { useState } from "react"
import { Remarkable } from "remarkable"
import './App.css';

const md = new Remarkable()

function App() {

  const[text, setText] = useState('');

  return (
    <div className="App">
        <textarea 
        className='textarea'
        id='markdown'
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='Type heare'
        autoFocus
        />  

       <div dangerouslySetInnerHTML={{ __html: md.render(text) }} className='render'>
         
       </div>
    </div>
  );
}

export default App;
