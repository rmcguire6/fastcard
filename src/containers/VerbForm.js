import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Card from '../components/Card'
import '../App.css'

const VerbForm = () => {
  const modelMatch = { matchId: uuidv4, spanish: 'vivir', english: 'live' }
  const [spanishList, setSpanishList] = useState([])
  const [englishList, setEnglishList] = useState([])
  const createSpanishTenses = (inf, conj) => {
    let spanishTenses = []
    const stem = inf.slice(0, inf.length - 1)
    const shortstem = inf.slice(0, inf.length - 2)
    if (conj !== 'ir') {
      spanishTenses = [{ pers: '1s', tense: `yo ${shortstem}o` },
        { pers: '2s', tense: `tu ${stem}s` }, { pers: '3s', tense: `el ${stem}` },
        { pers: '1p', tense: `nosotros ${stem}mos` }, { pers: '2p', tense: `vosotros ${stem}is` },
        { pers: '3p', tense: `ellos ${stem}n` }]
    } else {
      spanishTenses = spanishTenses = [{ pers: '1s', tense: `yo ${shortstem}o` },
        { pers: '2s', tense: `tu ${shortstem}es` }, { pers: '3s', tense: `el ${shortstem}e` },
        { pers: '1p', tense: `nosotros ${stem}mos` }, { pers: '2p', tense: `vosotros ${stem}s` },
        { pers: '3p', tense: `ellos ${shortstem}en` }]
    }
    return spanishTenses
  }
  const createEnglishTenses = (inf) => {
    return [{ pers: '1s', tense: `I ${inf}` },
      { pers: '2s', tense: `you ${inf}` }, { pers: '3s', tense: `he or she ${inf}s` },
      { pers: '1p', tense: `we ${inf}` }, { pers: '2p', tense: `you(pl) ${inf}` },
      { pers: '3p', tense: `they ${inf}` }]
  }
  useEffect(() => {
    setSpanishList(createSpanishTenses(modelMatch.spanish, 'ir'))
    setEnglishList(createEnglishTenses(modelMatch.english))
  }, [])
  const handleSpanishClick = (id) => {
    setSpanishList(spanishList.filter((item) => item.pers !== id))
  }
  const handleEnglishClick = (id) => {
    setEnglishList(englishList.filter((item) => item.pers !== id))
  }
  return (
    <div className='container'>
      <h2>Match the Verb Forms</h2>
      <div className='lists'>
        <div className='list'>
          {spanishList.map((word) => (
            <Card
              key={word.pers} id={word.pers} word={word.tense}
              handleClick={(id) => handleSpanishClick(id)}
            />
          ))}
        </div>
        <div className='list'>
          {englishList.map((word) => (
            <Card
              key={word.pers} id={word.pers} word={word.tense}
              handleClick={(id) => handleEnglishClick(id)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
export { VerbForm as default }
