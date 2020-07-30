import React, { useEffect, useReducer, useState } from 'react'
import axios from 'axios'
import matchesReducer from '../reducers/matches'
import MatchesContext from '../context/matches-context'
import AppRouter from '../components/AppRouter'
import '../App.css'

const App = () => {
  const [matches, dispatch] = useReducer(matchesReducer, [])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const result = await axios.get('/matches')
        const matches = result.data.matches
        dispatch({ type: 'POPULATE_MATCHES', matches })
      } catch (error) {
      }
      setIsLoading(false)
    }
    fetchData()
  }, [])

  return (
    <MatchesContext.Provider value={{ matches, dispatch }}>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <AppRouter />
      )}
    </MatchesContext.Provider>
  )
}

export { App as default }
