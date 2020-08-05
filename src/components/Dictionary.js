import React, { useContext } from 'react'
import MatchesContext from '../context/matches-context'
import Row from './Row'

const Dictionary = () => {
  const { matches } = useContext(MatchesContext)
  return (
    <>
      <h3>Dictionary</h3>
      {(matches.length > 0)
        ? (
          <>
            {matches.map(match =>
              <Row key={match.matchId} spanish={match.spanish} english={`to ${match.english}`} />
            )}
          </>
        ) : (
          <div>Please add matches</div>
        )}
    </>
  )
}
export { Dictionary as default }
