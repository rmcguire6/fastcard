import React, {useState} from 'react';
import '../App.css'
const App = () => {
  const [matches, setMatches] = useState([])
  const [english, setEnglish] = useState('')
  const [spanish, setSpanish] = useState('')
  
  const addMatch = (e) => {
    e.preventDefault()
    setMatches([
      ...matches,
      {
        english,
        spanish
      }
    ])
    setEnglish('')
    setSpanish('')
  }
  return (
    <div className="App">
      <header className="App-header">
       <h1>Fast Card</h1>
      </header>
      <p>Learn faster with Fast Card</p>
      <h2>Match</h2>
      {matches.map((match) => (
        <div key={match.spanish}>
          <h4>{`to ${match.english}`}</h4>
          <h4>{match.spanish}</h4>
        </div>
      ))}
      <h3>Add a Word Match</h3>
      <form onSubmit={addMatch}>
        <input value={english} onChange={(e) => setEnglish(e.target.value)}/>
        <input value={spanish} onChange={(e) => setSpanish(e.target.value)}/>
        <button >Add a word pair</button>
      </form>
    </div>
  );
}

export {App as default};
