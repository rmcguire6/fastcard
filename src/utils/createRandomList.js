import shuffle from 'shuffle-array'

const createRandomList = (list) => {
  let randomList = list.slice()
  randomList = shuffle(randomList)
  console.log('randomList is now', randomList)
  return randomList
}
export { createRandomList as default }
