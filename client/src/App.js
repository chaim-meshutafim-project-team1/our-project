import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Landing from './components/pages/landing'
import Translation from './components/pages/translation'
import Favorites from './components/pages/favorites'
import './components/pages/css/normalize.css'
import './components/pages/css/app.css'
import Navbar from './components/utils/Navbar'

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
      <Switch>
      <Route exact path="/" component={Landing}/>
      <Route exact path="/translation" component={Translation}/>
      <Route exact path="/favorites" component={Favorites}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
