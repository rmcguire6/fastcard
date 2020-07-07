import React, {useContext} from 'react'
import VerbsContext from '../context/verbs-context'
import CardList from '../components/CardList'
import '../App.css'
import {randomizeArray} from '../utils'
const Match= () => {
  const {verbs} = useContext(VerbsContext)
  const english = []
  const spanish = []
    verbs.forEach((item) => {
      english.push({id: item.id, word:item.eng})
      spanish.push({id: item.id, word: item.inf})
    })
  randomizeArray(spanish)
return (
  <div className="container">
    <h2>Match</h2>
    <div className="lists">
    <CardList list={english} />
    <CardList list={spanish} />
    </div>
  </div>
  )
}
export {Match as default}