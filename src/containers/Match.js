import React, { useContext, useEffect, useState } from 'react'
import MatchesContext from '../context/matches-context'
import Card from '../components/Card'
import '../App.css'

const Match = () => {
  const { matches } = useContext(MatchesContext)
  const [spanishList, setSpanishList] = useState([])
  const [englishList, setEnglishList] = useState([])

  useEffect(() => {
    setEnglishList(matches.map((match) => {
      return { match_id: match.match_id, english: match.english }
    }))
    setSpanishList(matches.map((match) => {
      return { match_id: match.match_id, spanish: match.spanish }
    }))
  }, [matches])

  return (
    <div className='container'>
      <h2>Match</h2>
      <div className='lists'>
        <div className='list'>
          {spanishList.map((match) =>
            <Card
              key={match.spanish}
              id={match.match_id}
              handleClick={(id) => setSpanishList(spanishList.filter((match) => match.match_id !== id))}
              word={match.spanish}
            />
          )}
        </div>
        <br />
        <div className='list'>
          {englishList.map((match) =>
            <Card
              key={match.english}
              id={match.match_id}
              handleClick={(id) => setEnglishList(englishList.filter((list) => list.match.match_id !== id))}
              word={match.english}
            />
          )}
        </div>
      </div>
    </div>
  )
}
export { Match as default }
