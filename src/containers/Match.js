import React, { useContext, useEffect, useState } from 'react'
import createRandomList from '../utils/createRandomList'
import MatchesContext from '../context/matches-context'
import Card from '../components/Card'
import '../App.css'

const Match = () => {
  const { matches } = useContext(MatchesContext)
  const [spanishList, setSpanishList] = useState([])
  const [englishList, setEnglishList] = useState([])

  useEffect(() => {
    setEnglishList(matches.map((match) => {
      return { matchId: match.matchId, english: match.english }
    }))
    setSpanishList(matches.map((match) => {
      return { matchId: match.matchId, spanish: match.spanish }
    }))
  }, [matches])
  
  const shuffled = createRandomList(englishList)
  return (
    <div className='container'>
      <h2>Match</h2>
      <div className='lists'>
        <div className='list'>
          {spanishList.map((match) =>
            <Card
              key={match.spanish}
              id={match.matchId}
              handleClick={(id) => setSpanishList(spanishList.filter((match) => match.matchId !== id))}
              word={match.spanish}
            />
          )}
        </div>
        <br />
        <div className='list'>
          {shuffled.map((match) =>
            <Card
              key={match.english}
              id={match.matchId}
              handleClick={(id) => setEnglishList(englishList.filter((list) => list.matchId !== id))}
              word={`to ${match.english}`}
            />
          )}
        </div>
      </div>
    </div>
  )
}
export { Match as default }
