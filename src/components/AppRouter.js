import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import AddMatches from '../containers/AddMatches'
import EditMatches from '../containers/EditMatches'
import CurrentMatches from './CurrentMatches'
import Match from '../containers/Match'
import VerbForm from '../containers/VerbForm'

const AppRouter = () => {
  return (
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
  )
}
export { AppRouter as default }
