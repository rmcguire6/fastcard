const matchesReducer = (state, action) => {
  switch (action.type) {
    case 'POPULATE_MATCHES':
      return action.matches
    case 'ADD_MATCH':
      return [
        ...state,
        {
          matchId: action.matchId,
          english: action.english,
          spanish: action.spanish
        }
      ]
    case 'REMOVE_MATCH':
      return state.filter((item) => item.spanish !== action.spanish)
    default:
      return state
  }
}
export { matchesReducer as default }
