import React from 'react';
import Meal from './Meal'

export default class PreviewMeal extends React.Component {
  render() {
    const { id, name, dietaries } = this.props
    return (
      <Meal name={ name } dietaries={ dietaries } id={ id } >
        <button className="remove-item">x</button>
      </Meal>
    );
  }
}
