const meals = (state = { previewed: [], dietaries: {} }, action) => {
  let newDietaries = { ...state.dietaries }
  switch (action.type) {
    case 'SELECT':
      action.item.dietaries.map(dietary => newDietaries[dietary] = (newDietaries[dietary] || 0) + 1 )

      return {
        ...state,
        previewed: [...state.previewed, action.item.id],
        dietaries: newDietaries
      }    
    case 'REMOVE':
      action.item.dietaries.map((dietary) => {
        newDietaries[dietary] = (newDietaries[dietary] || 0) - 1
        if (newDietaries[dietary] === 0) { delete newDietaries[dietary] }
      })

      return {
        ...state,
        previewed: state.previewed.filter( mealId => mealId !== action.item.id ),
        dietaries: newDietaries
      }
    default:
      return state
  }
}

export default meals