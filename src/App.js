import React from 'react';
import './App.css';
import items from './items'
import Meal from './components/Meal'
import PreviewMeal from './components/PreviewMeal'
import Dietary from './components/Dietary'
import { connect } from 'react-redux'

const App = (props) => {
  const { previewedMeals, dietaries } = props

  return (
    <div className="wrapper">
      <div className="menu-summary">
        <div className="container">
          <div className="row">
            <div className="col-6 menu-summary-left">
              <span>{ previewedMeals.length } items</span>
            </div>
            <div className="col-6 menu-summary-right">
              { Object.keys(dietaries).map( (dietary, index) => 
                <span key={ index }>{ dietaries[dietary] }x<Dietary  name={ dietary }>{ dietaries[dietary] }</Dietary></span> ) 
              }
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
    previewedMeals: meals.previewed,
    dietaries: meals.dietaries
  }
})(App);