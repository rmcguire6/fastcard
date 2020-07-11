import React, {useEffect,useReducer} from 'react'
import AddMatches from './AddMatches'
import Match from './Match'
import VerbForm from '../containers/VerbForm'
import matchesReducer from '../reducers/matches'
import MatchesContext from '../context/matches-context'
import '../App.css'


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
      <Match/>
      <VerbForm />
      <AddMatches />
      </div>
    </MatchesContext.Provider >
  );
}

export {App as default}  ;
