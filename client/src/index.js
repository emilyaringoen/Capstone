import React from 'react'
import ReactDOM from 'react-dom'
import Index from './components/pages/index.js'
import FamilyTree from './components/pages/familytree.js'
import Timeline from './components/pages/timeline.js'
import EventItem from './components/pages/event.js'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter, Route } from 'react-router-dom'
import './app.css'


ReactDOM.render(
  <BrowserRouter>
    <div className="App">
      <Route exact name="index" path="/" component={ Index }></Route>
      <Route exact path="/family-tree" component={ FamilyTree }></Route>
      <Route exact path="/timeline" component={ Timeline }></Route>
      <Route exact path="/event" component={ EventItem }></Route>
    </div>
  </BrowserRouter>,
   document.getElementById('root')
)
registerServiceWorker()
