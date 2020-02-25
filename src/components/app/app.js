//импорт библиотек React

import React from 'react'

import AppHeader from '../app-header'
import ToDoList from '../todo-list'
import SearchPanel from '../search-panel'
import ItemStatusFilter from '../item-status-filter'
import ItemAddForm from '../item-add-form'

import './app.css'

export default class App extends React.Component {

  state = {
    todoData: [
    {label: 'Drink Coffee', important: false, id: 1},
    {label: 'Build Awesome App', important: true, id: 2},
    {label: 'Have a lunch', important: false, id: 3}
  ] } 

  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id)

      const befor = todoData.slice(0, idx)
      const after = todoData.slice(idx + 1)

      const newArray = [...befor, ...after]

      return {todoData: newArray}
    })
  }

  addItem = (text) => {
    console.log ('added', text)
  }

 // const isLogIn = true
  //const logInBox = <span>Log in please!</span>
  //const welcomBox = <span>Welcome back! </span>

  render (){
    return (
      <div className = "todo-app"> 
       <AppHeader toDo = {1} done = {3}/>
        <div className = "todo-app d-flex">
         <SearchPanel/><ItemStatusFilter/>
        </div>  
         <ToDoList todos = {this.state.todoData}
         onDeleted = {this.deleteItem}/>  
         <ItemAddForm onAddItem = {this.addItem}/>  
    </div>
    )
  }
}
