import React, { useEffect, useReducer } from 'react'
import axios from 'axios'
import matchesReducer from '../reducers/matches'
import MatchesContext from '../context/matches-context'
import AppRouter from '../components/AppRouter'
import '../App.css'

const App = () => {
  const [matches, dispatch] = useReducer(matchesReducer, [])

  useEffect(() => {
    axios.get('/matches')
      .then(res => {
        const matches = res.data.matches
        dispatch({ type: 'POPULATE_MATCHES', matches })
      })
  }, [])

  return (
    <MatchesContext.Provider value={{ matches, dispatch }}>
      <AppRouter />
    </MatchesContext.Provider>
  )
}

export { App as default }
