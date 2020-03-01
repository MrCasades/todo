import React from 'react';

import './todo-list-item.css';

export default class TodoListItem extends React.Component {

  //constructor (){
    //()

    // this.state = {
    //   done: false,
    //   important: false
    // }//внутр. состояния

    // this.onLabelClick = () => {
    //   this.setState((state) => {
    //     return {done: !state.done}
    //   })//создание функции, чтобы сохранить this и изм внутр состояние.
    // }

    // this.onMarkImportant = () => {
    //   this.setState((state) => {
    //     return {
    //       important: !state.important
    //     }
    //   })
    // }
  //}

  render(){

    const { label, onDeleted, 
            onToggleImportant, onToggleDone, important, done } = this.props
//const {done, important} = this.state

    let classNames = 'todo-list-item'

    if (done) {
      classNames += ' done'
    }

    if (important){
      classNames += ' important'
    }

    return (
      <span className={classNames}>
        <span
          className="todo-list-item-label"
          onClick = {onToggleDone}>
          {label}
        </span>
  
        <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick = {onToggleImportant}>
          <i className="fa fa-exclamation" />
        </button>
  
        <button type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick ={onDeleted}>
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}

// const TodoListItemFunc = ({ label, important = false }) => {

//   const style = {
//     color: important ? 'steelblue' : 'black',
//     fontWeight: important ? 'bold' : 'normal'
//   };

//   return (
//     <span className="todo-list-item">
//       <span
//         className="todo-list-item-label"
//         style={style}>
//         {label}
//       </span>

//       <button type="button"
//               className="btn btn-outline-success btn-sm float-right">
//         <i className="fa fa-exclamation" />
//       </button>

//       <button type="button"
//               className="btn btn-outline-danger btn-sm float-right">
//         <i className="fa fa-trash-o" />
//       </button>
//     </span>
//   );
// };

//export default TodoListItem;
