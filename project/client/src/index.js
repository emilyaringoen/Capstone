import React from 'react'
import ReactDOM from 'react-dom'
import Index from './components/index.js'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import { BrowserRouter, Route } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <div className="App">
      <Route exact path="/" component={ Index }></Route>
    </div>
  </BrowserRouter>,
   document.getElementById('root')
)
registerServiceWorker()
