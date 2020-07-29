import axios from 'axios'

async function sendMatch ({ spanish, english, matchId, conj }) {
  axios.post('/add_match', {
    spanish: spanish,
    english: english,
    match_id: matchId,
    conj: conj
  })
    .then(function (response) {
      console.log(response)
    })
    .catch(function (error) {
      console.log(error)
    })
}

export { sendMatch }
