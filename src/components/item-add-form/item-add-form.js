import React from 'react';

import './item-add-form.css';

export default class ItemADddForm extends React.Component {

    /*Получение значения из формы*/
    onLabelChange = (event) => {
        console.log ('.')
    }

    render(){
        return (
            <form className = "item-add-form d-flex">
                <input type="text" 
                        className = "form-control"
                        onChange = {this.onLabelChange}
                        placeholder = "Your text..."/>
                <button className = "btn btn-outline-secondary"
                onClick = {() => this.props.onAddItem ('Hello!')}>
                    Add
                </button>
            </form>
        )
    }
}