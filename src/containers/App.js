import React, {useEffect,useReducer} from 'react'
import AddMatches from './AddMatches'
import Match from '../containers/Match'
import '../App.css'

import MatchesContext from '../context/matches-context'
import matchesReducer from '../reducers/matches'

const App = () => {
  const [matches, dispatch] = useReducer(matchesReducer, [])

  useEffect(()=> {
    const matches = JSON.parse(localStorage.getItem('matches'))
    if (matches){
      dispatch({type: 'POPULATE_MATCHES', matches})
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
      < Match />
      <AddMatches />
      </div>
    </MatchesContext.Provider >
  );
}

export {App as default}  ;
