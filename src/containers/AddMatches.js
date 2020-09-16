import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import MatchesContext from '../context/matches-context'
import Dictionary from '../components/Dictionary'
import { sendMatch } from '../utils/axios'
import '../App.css'

const AddMatches = () => {
  const { dispatch } = useContext(MatchesContext)
  const [english, setEnglish] = useState('')
  const [spanish, setSpanish] = useState('')
  const history = useHistory()
  const matchId = uuidv4()

  const addMatch = (e) => {
    e.preventDefault()
    const conj = spanish.slice(-2)
    sendMatch({ matchId, english, spanish, conj })
    dispatch(
      {
        type: 'ADD_MATCH',
        matchId,
        english,
        spanish,
        conj
      })
    setEnglish('')
    setSpanish('')
    history.push('/')
  }

  return (
    <>
      <h3>Add a Word Match</h3>
      <form onSubmit={addMatch}>
        <div className='form'>
          <div className='form_input container'>
            <label htmlFor='spanish' className='row-text'>Spanish</label>
            <input name='spanish' value={spanish} onChange={(e) => setSpanish(e.target.value)} />
          </div>
          <div className='form_input container'>
            <label htmlFor='english' className='row-text'>English</label>
            <input name='english' value={english} onChange={(e) => setEnglish(e.target.value)} />
          </div>
          
        </div>
        <button className='button'>Add a word pair</button>
      </form>
      <Dictionary />
    </>
  )
}
export { AddMatches as default }
