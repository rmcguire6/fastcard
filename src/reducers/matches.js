const matchesReducer = (state, action) => {
    switch(action.type) {
      case 'POPULATE_MATCHES':
        return action.matches
      case 'ADD_MATCH':
        return [
          ...state,
          {
            match_id: action.match_id,
            english: action.english,
            spanish: action.spanish
          }
        ]
      default:
        return state
    }
  }
  export { matchesReducer as default}
