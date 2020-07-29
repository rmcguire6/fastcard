import React, { useEffect, useReducer } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import axios from 'axios'
import AddMatches from './AddMatches'
import EditMatches from './EditMatches'
import CurrentMatches from '../components/CurrentMatches'
import Match from './Match'
import VerbForm from '../containers/VerbForm'
import matchesReducer from '../reducers/matches'
import MatchesContext from '../context/matches-context'
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
      <Router>
        <div className='App'>
          <nav>
            <ul className='navlist'>
              <li>
                <Link to='/' className='navlist--item'> Current Matches</Link>
              </li>
              <li>
                <Link to='/matches' className='navlist--item'>Match Verbs</Link>
              </li>
              <li>
                <Link to='/match_forms' className='navlist--item'>Match Forms</Link>
              </li>
              <li>
                <Link to='/add_match' className='navlist--item'>Add A Match</Link>
              </li>
              <li>
                <Link to='/remove_match' className='navlist--item'>Remove A Match</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path='/match_forms'>
              <VerbForm />
            </Route>
            <Route path='/add_match'>
              <AddMatches />
            </Route>
            <Route path='/remove_match'>
              <EditMatches />
            </Route>
            <Route path='/matches'>
              <Match />
            </Route>
            <Route path='/'>
              <CurrentMatches />
            </Route>
          </Switch>
        </div>
      </Router>
    </MatchesContext.Provider>
  )
}

export { App as default }
