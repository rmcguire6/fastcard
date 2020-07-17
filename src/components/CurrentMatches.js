import React, { useContext } from 'react'
import MatchesContext from '../context/matches-context'
import Row from './Row'

const CurrentMatches = () => {
  const { matches } = useContext(MatchesContext)
  return (
    <>
      <h3>Current Matches</h3>
      {matches.map(match =>
        <Row key={match.matchId} spanish={match.spanish} english={match.english} />
      )}
    </>
  )
}
export { CurrentMatches as default }
