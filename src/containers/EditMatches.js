import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import MatchesContext from '../context/matches-context'
import CurrentMatches from '../components/CurrentMatches'
import '../App.css'

const EditMatches = () => {
  const { dispatch } = useContext(MatchesContext)
  const [spanish, setSpanish] = useState('')
  const history = useHistory()

  const removeMatch = (e) => {
    e.preventDefault()
    dispatch(
      {
        type: 'REMOVE_MATCH',
        spanish: spanish
      })
    history.push('/')
  }

  return (
    <>
      <h3>Remove a Word Match</h3>
      <form onSubmit={removeMatch}>
        <div className='form'>
          <div className='form_input container'>
            <label htmlFor='spanish'>Type Spanish Word to Remove Match</label>
            <input name='spanish' value={spanish} onChange={(e) => setSpanish(e.target.value)} />
          </div>
        </div>
        <button className='button'>Remove a word pair</button>
      </form>
      <CurrentMatches />
    </>
  )
}
export { EditMatches as default }
