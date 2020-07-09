import React, {useContext} from 'react'
import Card from '../components/Card'
import MatchesContext from '../context/matches-context'
import '../App.css'

const Match= () => {
  const {matches} = useContext(MatchesContext)
return (
  <div className="container">
    <h2>Match</h2>
    <div className="lists">
    <div className="list">
    {matches.map((match) => (
      <Card key={match.match_id} word={`to ${match.english}`}/>
    )
    )}
    </div>
    <div className="list">
     {matches.reverse().map((match) => (
      <Card key={match.match_id} word={match.spanish}/>
    )
    )}
    </div>
    </div>
  </div>
  )
}
export {Match as default}