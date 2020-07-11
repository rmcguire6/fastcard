import React, {useEffect,useState} from 'react'
import Card from '../components/Card'

import '../App.css'

const VerbForm= () => {
  const [spanishList, setSpanishList] = useState([])
  const [englishList, setEnglishList] = useState([])
  const createSpanishTenses = (inf, conj) => {
    let spanishTenses = []
    const stem = inf.slice(0, inf.length-1)
    const shortstem = inf.slice(0, inf.length-2)
    if ( conj !== 'ir') {
      spanishTenses = [`${shortstem}o`,`${stem}s`,`${stem}`,`${stem}mos`,`${stem}is`,`${stem}n`]
    } else {
      spanishTenses = [`${shortstem}o`,`${shortstem}es`,`${shortstem}e`,`${stem}mos`,`${shortstem}is`,`${shortstem}en`]
    }
    return spanishTenses
  }
  const createEnglishTenses = (inf) => {
    return [`I ${inf}`, `you ${inf}`, `he or she ${inf}s`, `we ${inf}`, `you(pl) ${inf}`, `they ${inf}`]
  }
  useEffect(()=> {
    setSpanishList(createSpanishTenses('hablar', 'ar'))
    setEnglishList(createEnglishTenses('speak'))
  }, [spanishList, englishList])

return (
  <div className="container">
    <h2>Match the Verb Forms</h2>
    <div className="lists">
      <div className="list">
      {spanishList.map((word, index) => (
        <Card key={index} word={word} />
      ))}
      </div>
      <div className="list">
      {englishList.map((word, index) => (
        <Card key={index} word={word} />
      ))}
      </div>
    </div>
  </div>
  )
}
export {VerbForm as default}