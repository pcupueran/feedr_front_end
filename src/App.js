import React from 'react';
import './App.css';
import items from './items'
import Meal from './components/Meal'
import PreviewMeal from './components/PreviewMeal'
import { connect } from 'react-redux'

const App = (props) => {
  const { previewedMeals } = props

  return (
    <div className="wrapper">
      <div className="menu-summary">
        <div className="container">
          <div className="row">
            <div className="col-6 menu-summary-left">
              <span>{ previewedMeals.length } items</span>
            </div>
            <div className="col-6 menu-summary-right">
              6x <span className="dietary">ve</span>
              4x <span className="dietary">v</span>
              12x <span className="dietary">n!</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container menu-builder">
        <div className="row">
          <div className="col-4">
            <ul className="item-picker">
              { items.map(item => <Meal key={ item.id } name={ item.name } dietaries={ item.dietaries } id={ item.id } />) }
            </ul>
          </div>
          <div className="col-8">
            <h2>Menu preview</h2>
            <ul className="menu-preview">
              { previewedMeals.map( (previewedMealId, index) => {
                  let item = items.find( item => item.id === previewedMealId )
                  return (<PreviewMeal key={ index } name={ item.name } dietaries={ item.dietaries } id={ item.id } />)
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(({ meals }) => {
  return {
    previewedMeals: meals.previewed
  }
})(App);