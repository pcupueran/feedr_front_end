const meals = (state = { previewed: [] }, action) => {
  switch (action.type) {
    case 'SELECT':
      return {
        ...state,
        previewed: [...state.previewed, action.item.id]
      }    
    case 'REMOVE':
      return {
        ...state,
        previewed: state.previewed.filter( mealId => mealId != action.item.id )
      }
    default:
      return state
  }
}

export default meals