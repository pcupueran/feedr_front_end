import React from 'react';
import Dietary from './Dietary'

export default class Meal extends React.Component {
  render() {
    const { name, dietaries } = this.props
    return (
      <li className="item">
        <h2>{ name }</h2>
        <p>
          { dietaries.map(dietary => <Dietary name={ dietary } />) }
        </p>
      </li>
    );
  }
}
