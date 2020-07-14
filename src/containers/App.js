import React, {useEffect,useReducer} from 'react'
import { BrowserRouter as Router, Link,  Route, Switch } from 'react-router-dom'
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
    <Router>
    <div className="App">
    <nav>
      <ul className="navlist">
        <li>
            <Link to ='/' className="navlist--item">Match Verbs</Link>
        </li>
        <li>
          <Link to ='/match_forms' className="navlist--item">Match Forms</Link>
        </li>
        <li>
          <Link to ='/add' className="navlist--item">Add A Word</Link>
        </li>
        </ul>
    </nav>
    <Switch>
      <Route path='/match_forms'>
        <VerbForm/>
      </Route>
      <Route path='/add'>
        <AddMatches/>
      </Route>
      <Route path='/'>
        <Match/>
      </Route>
    </Switch>
    </div>
    </Router>
  </MatchesContext.Provider >
  )
}

export {App as default}  ;
