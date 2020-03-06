import React from 'react';

import './item-add-form.css';

export default class ItemADddForm extends React.Component {

    state = {
        label: ''//инициализируем изменённое состояние
    }

    /*Получение значения из формы*/
    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()//отмена действия по умолчанию
        this.props.onAddItem (this.state.label)
        this.setState({
            label: ''//инициализируем изменённое состояние
        })
    }

    render(){
        return (
            <form className = "item-add-form d-flex"
             onSubmit = {this.onSubmit}>
                <input type="text" 
                        className = "form-control"
                        onChange = {this.onLabelChange}//метод получает данные из формы
                        placeholder = "Your text..."
                        value = {this.state.label}/>
                <button className = "btn btn-outline-secondary">
                    Add
                </button>
            </form>
        )
    }
}