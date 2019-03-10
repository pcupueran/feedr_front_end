const meals = (state = { previewed: [] }, action) => {
  switch (action.type) {
    case 'SELECT':
      return {
        ...state,
        previewed: [...state.previewed, action.item.id]
      }
    default:
      return state
  }
}

export default meals