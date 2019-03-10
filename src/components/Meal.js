import React from 'react';
import Dietary from './Dietary'
import { connect } from 'react-redux'
import styled from 'styled-components'

class Meal extends React.Component {
  previewMeal = () => {
    const { id, dispatch, previewed } = this.props
    if (!previewed) { dispatch({ type: 'SELECT', item: { id: id } }) }
  }

  render() {
    const { name, dietaries, previewed, children } = this.props
    return (
      <MealItem previewed={ previewed } className="item" onClick={ this.previewMeal }>
        <h2>{ name }</h2>
        <p>
          { dietaries.map((dietary, index) => <Dietary key={ index } name={ dietary } />) }
        </p>
        { children }
      </MealItem>
    );
  }
}

const MealItem = styled.li `
  &.item {
    background: ${ props =>  props.previewed ? '#51ad511f' : 'white' }
  }
`

export default connect(({ meals }, ownProps) => {
  return {
    previewed: meals.previewed.includes(ownProps.id)
  }
})(Meal)