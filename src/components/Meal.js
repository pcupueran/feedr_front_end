import React from 'react';
import Dietary from './Dietary'
import { connect } from 'react-redux'

class Meal extends React.Component {
  previewMeal = () => {
    const { id, dispatch, previewed } = this.props
    if (!previewed) { dispatch({ type: 'SELECT', item: { id: id } }) }
  }

  render() {
    const { name, dietaries, children } = this.props
    return (
      <li className="item" onClick={ this.previewMeal }>
        <h2>{ name }</h2>
        <p>
          { dietaries.map((dietary, index) => <Dietary key={ index } name={ dietary } />) }
        </p>
        { children }
      </li>
    );
  }
}

export default connect(({ meals }, ownProps) => {
  return {
    previewed: meals.previewed.includes(ownProps.id)
  }
})(Meal)