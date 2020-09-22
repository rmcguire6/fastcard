import React, { useContext, useEffect, useState } from 'react'
import createRandomList from '../utils/createRandomList'
import MatchesContext from '../context/matches-context'
import '../App.css'

const Match = () => {
  const { matches } = useContext(MatchesContext)
  const [spanishList, setSpanishList] = useState([])
  const [englishList, setEnglishList] = useState([])
  const [englishId, setEnglishId] = useState('')
  const [spanishId, setSpanishId] = useState('')
  useEffect(() => {
    setEnglishList(matches.map((match) => {
      return { matchId: match.matchId, english: match.english }
    }))
    setSpanishList(matches.map((match) => {
      return { matchId: match.matchId, spanish: match.spanish }
    }))
  }, [matches])
  
  const handleEnglishClick =(item) => {
    const newId = item.matchId
    setEnglishId(newId)
    setEnglishList(englishList.filter((match) => match.matchId !== item.matchId))
  }
  const handleSpanishClick =(item) => {
    const newId = item.matchId
    setSpanishId(newId)
    setSpanishList(spanishList.filter((match) => match.matchId !== item.matchId))
  }
  const shuffled = createRandomList(englishList)

  return (
    <div className='container'>
      <h2>Match</h2>
        <div className='lists'>
          <div className='list'>
            {spanishList.map(match => (
                <div className='card' key={match.spanish}>
                  <button className='button' onClick={() => handleSpanishClick(match)}>{match.spanish}</button>
                </div>
            ))}
          </div>
          <br />
          <div className='list'>
            {shuffled.map(match => (
            <div className='card' key={match.english}>
            <button className='button' onClick={() => handleEnglishClick(match)}>{`to ${match.english}`}</button>
          </div>
          ))}
        </div>
      </div>
      <h3>Ids</h3>
      <p>{englishId}</p><p>{spanishId}</p>
      <p>Do the Ids Match</p>
    </div>
  )
}
export { Match as default }
