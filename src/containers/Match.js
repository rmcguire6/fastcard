import React, {useContext} from 'react'
import VerbsContext from '../context/verbs-context'
import '../App.css'

const Match= () => {
  const {verbs} = useContext(VerbsContext)
return <ul>{verbs.map((verb) => (
        <li key={verb.id}>{verb.eng} {verb.inf}</li>
))
}</ul>
}
export default Match;