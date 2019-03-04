import React from 'react';
import './BuildControl.css';
const BuildControl = (props) => {
  return (
    <div className="BuildControl">
      <div className="Label">{props.label}</div>
      <button className="Less" onClick={props.deleteIngredientHandlerProps} disabled={props.disabledInfo}>Less</button>
      <button className="More" onClick={props.addIngredientHandlerProps}>More</button>
    </div>
  )
}

export default BuildControl
