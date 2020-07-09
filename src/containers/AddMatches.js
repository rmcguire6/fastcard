import React, {useState, useContext} from 'react';
import { v4 as uuidv4} from 'uuid'
import '../App.css'

import MatchesContext from '../context/matches-context'

const AddMatches =() => {
  const {dispatch} = useContext(MatchesContext)
  const [english, setEnglish] = useState('')
  const [spanish, setSpanish] = useState('')

  const addMatch = (e) => {
    e.preventDefault()
    dispatch(
        { type: 'ADD_MATCH',
          match_id: uuidv4(),
          english,
          spanish
        })
    setEnglish('')
    setSpanish('')
  }

return (
  <>
    <h3>Add a Word Match</h3>
        <form onSubmit={addMatch}>
            <div className="form">
            <div className="form_input container">
            <label htmlFor="english">English</label>
            <input name="english" value={english} onChange={(e) => setEnglish(e.target.value)}/>
            </div>
            <div className="form_input container">
            <label htmlFor="spanish">Spanish</label>
            <input name="spanish"  value={spanish} onChange={(e) => setSpanish(e.target.value)}/>
            </div>
            </div>
            <button >Add a word pair</button>
        </form>
  </>
  )
}
export {AddMatches as default}