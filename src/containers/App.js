import React, {useEffect, useState} from 'react';
import { v4 as uuidv4} from 'uuid'
import Card from '../components/Card'
import '../App.css'

const App = () => {
  const [matches, setMatches] = useState([])
  const [english, setEnglish] = useState('')
  const [spanish, setSpanish] = useState('')

  useEffect(()=> {
    const storedMatches = JSON.parse(localStorage.getItem('matches'))
    if (storedMatches){
      setMatches(storedMatches)
    }
  }, [])
  useEffect(()=> {
    localStorage.setItem('matches', JSON.stringify(matches))
  }, [matches])
  
  const addMatch = (e) => {
    e.preventDefault()
    setMatches([
      ...matches,
      {
        match_id: uuidv4(),
        english,
        spanish
      }
    ])
    setEnglish('')
    setSpanish('')
  }
  return (
    <div className="App">
      <header>
       <h1>Fast Card</h1>
      </header>
      <p>Learn faster with Fast Card</p>
      <h2>Match</h2>
      {matches.map((item) => (
        <div key={item.match_id} className="list_row">
          <Card word={item.spanish}/>
          <Card word={`to ${item.english}`}/>
        </div>
      ))}

      <h3>Add a Word Match</h3>
      <form onSubmit={addMatch}>
        <div className="form">
        <div className="form_input container">
        <label htmlFor="english">English</label>
        <input name="english" value={english} onChange={(e) => setEnglish(e.target.value)}/>
        </div>
        <div className="form_input container">
        <label htmlFor="spanish">Spanish</label>
        <input name="spanish"  value={spanish} onChange={(e) => setSpanish(e.target.value)}/>
        </div>
        </div>
        <button >Add a word pair</button>
      </form>
    </div>
  );
}

export {App as default};
