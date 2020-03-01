//импорт библиотек React

import React from 'react'

import AppHeader from '../app-header'
import ToDoList from '../todo-list'
import SearchPanel from '../search-panel'
import ItemStatusFilter from '../item-status-filter'
import ItemAddForm from '../item-add-form'

import './app.css'

export default class App extends React.Component {

  maxId = 100//начальный id

  /*Данные приложения */
  state = {
    todoData: [
    {label: 'Drink Coffee', important: false, id: 1},
    {label: 'Build Awesome App', important: true, id: 2},
    {label: 'Have a lunch', important: false, id: 3}
  ] } 


  /*Удалить элемент*/
  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id)

      const befor = todoData.slice(0, idx)
      const after = todoData.slice(idx + 1)

      const newArray = [...befor, ...after]

      return {todoData: newArray}
    })
  }

  /*Добавить элемент*/
  addItem = (text) => {
    const newItem = {
      label: text,
      important: false,
      id: this.maxId++
    }
    //console.log ('added', text)

    this.setState(({todoData}) => {
      const newArray = [...todoData, newItem]

      return {todoData: newArray}
    })
  }
/*Подсчёт незавершённых событий */
  onToggleImportant = (id) => {
    console.log('imp', id)
  }

  /*Подсчёт важных событий */
  onToggleDone = (id) => {
    console.log('Don', id)
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
         onDeleted = {this.deleteItem}
         onToggleImportant = {this.onToggleImportant}
         onToggleDone = {this.onToggleDone}/>  
         <ItemAddForm onAddItem = {this.addItem}/>  
    </div>
    )
  }
}
