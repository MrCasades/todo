//импорт библиотек React

import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/app'



//const el = <App/>
 


// тоже что и ниже

//const el = React.createElement('h1', null, 'Hello World')

//рендер элемента

ReactDOM.render(<App/>, document.getElementById('root'))

