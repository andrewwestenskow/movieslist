import React from 'react'
import AllMovies from './Components/AllMovies'
import Movie from './Components/Movie'
import {Switch, Route} from 'react-router-dom'

export default(
  <Switch>
    <Route exact path='/' component={AllMovies}/>
    <Route path='/movies/:id' component={Movie}/>
  </Switch>
)