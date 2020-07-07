import React, {useState} from 'react';
import Match from './Match'
import VerbsContext from '../context/verbs-context'
import '../App.css'
function App() {
  const [verbs, setVerbs] = useState([])
  return (
    <VerbsContext.Provider value={{verbs}}>
    <div className="App">
      <header className="App-header">
       <h1>Fast Card</h1>
      </header>
      <p>Learn faster with Fast Card</p>
      < Match />
    </div>
    </VerbsContext.Provider>
  );
}

export {App as default};
