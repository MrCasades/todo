import React from 'react';

import './item-add-form.css';

export default class ItemADddForm extends React.Component {
    render(){
        return (
            <div className = "item-add-form">
                <button className = "btn btn-outline-secondary"
                onClick = {() => this.props.onAddItem ('Hello!')}>
                    Add Element
                </button>
            </div>
        )
    }
}