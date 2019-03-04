import React from 'react'
import './BuildControls.css';
import BuildControl from './BurgerControl/BuildControl';
const controls = [
    {
        label: 'bread-top',
        type: 'bread-top'
    }, {
        label: 'Salad',
        type: 'salad'
    }, {
        label: 'Bacon',
        type: 'bacon'
    }, {
        label: 'Cheese',
        type: 'cheese'
    }, {
        label: 'Meat',
        type: 'meat'
    }, {
        label: 'bread-bottom',
        type: 'bread-bottom'
    }
]
const BuildControls = (props) => {
    return (
        <div className="BuildControls">
        <h3>totalPrice: {props.totalPriceProps}</h3>
            {controls.map(control => {
                return <BuildControl
                    key={control.label}
                    label={control.label}
                    addIngredientHandlerProps={() => props.addIngredientHandlerProps(control.type)}
                    deleteIngredientHandlerProps={() => props.deleteIngredientHandlerProps(control.type)}
                    disabledInfo={props.disabledInfo[control.type]}/>
            })}
            <button className="OrderButton" disabled={!props.totalPriceProps}>Order Now</button>
        </div>
    )
}

export default BuildControls;
