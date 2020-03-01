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
    this.createTodoItem('Drink Coffee'),
    this.createTodoItem('Build Awesome App'),
    this.createTodoItem('Have a lunch')
    
    // {label:'Drink Coffee', important: false, id: 1},
    // {label: 'Build Awesome App', important: true, id: 2},
    // {label: 'Have a lunch', important: false, id: 3}
  ] } 

  /*Создание элемента списка*/

  createTodoItem(label){
    return {label,
           important: false,
           done: false,
           id: this.maxId++}
  }


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
    const newItem = this.createTodoItem(text)
    //console.log ('added', text)

    this.setState(({todoData}) => {
      const newArray = [...todoData, newItem]

      return {todoData: newArray}
    })
  }

  toggleProp (arr, id, propName){

      const idx = arr.findIndex((el) => el.id === id)
      const oldItem = arr[idx]

      const newItem = {...oldItem, [propName]: !oldItem[propName]}

      return [
        ...arr.slice(0, idx),
        newItem,
        ...arr.slice(idx+1)
      ]
  }
/*Подсчёт незавершённых событий */
  onToggleImportant = (id) => {

    this.setState(({todoData}) => {
      
      return {todoData: this.toggleProp(todoData, id, 'important')}

    })
    console.log('imp', id)
  }

  /*Подсчёт важных событий */
  onToggleDone = (id) => {

    this.setState(({todoData}) => {
      
      return {todoData: this.toggleProp(todoData, id, 'done')}

    })
    console.log('Don', id)
  }

  

 // const isLogIn = true
  //const logInBox = <span>Log in please!</span>
  //const welcomBox = <span>Welcome back! </span>

  render (){

    const { todoData } = this.state
    //Подсчёт Done
    const doneCount = todoData.filter((el) => el.done).length

    //Подсчёт ToDO
    const todoCount = todoData.length - doneCount

    return (
      <div className = "todo-app"> 
       <AppHeader toDo = {todoCount} done = {doneCount}/>
        <div className = "todo-app d-flex">
         <SearchPanel/><ItemStatusFilter/>
        </div>  
         <ToDoList todos = {todoData}
         onDeleted = {this.deleteItem}
         onToggleImportant = {this.onToggleImportant}
         onToggleDone = {this.onToggleDone}/>  
         <ItemAddForm onAddItem = {this.addItem}/>  
    </div>
    )
  }
}
