import React from 'react';
import Meal from './Meal'
import { connect } from 'react-redux'

class PreviewedMeal extends React.Component {
  removeMeal = () => {
    const { id, dispatch, dietaries } = this.props
    dispatch({ type: 'REMOVE', item: { id: id, dietaries: dietaries } })
  }

  render() {
    const { id, name, dietaries } = this.props
    return (
      <Meal name={ name } dietaries={ dietaries } id={ id } >
        <button className="remove-item" onClick={ this.removeMeal }>x</button>
      </Meal>
    );
  }
}

export default connect()(PreviewedMeal)