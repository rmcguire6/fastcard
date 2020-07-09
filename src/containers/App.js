import React, {useEffect,useReducer, useState} from 'react'
import AddMatches from './AddMatches'
import Card from '../components/Card'
import '../App.css'

import MatchesContext from '../context/matches-context'
import matchesReducer from '../reducers/matches'

const App = () => {
  const [matches, dispatch] = useReducer(matchesReducer, [])

  useEffect(()=> {
    const storedMatches = JSON.parse(localStorage.getItem('matches'))
    if (storedMatches){
      dispatch({type: 'POPULATE_MATCHES', matches: storedMatches})
    }
  }, [])
  useEffect(()=> {
    localStorage.setItem('matches', JSON.stringify(matches))
  }, [matches])
  
  return (

    <MatchesContext.Provider value={{matches, dispatch}} >
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
      <AddMatches />
      </div>
    </MatchesContext.Provider >
  );
}

export {App as default}  ;
