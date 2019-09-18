import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class AllMovies extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: []
    }
  }

  async componentDidMount() {
    const movies = await axios.get('/api/movies')
    this.setState({
      movies: movies.data
    })
  }


  render() {

    const mappedMovies = this.state.movies.map(element => {
      return (
        <div  key={element.movies_id}>
          <Link to={`/movies/${element.movies_id}`}>
            <h1>{element.title}</h1>
          </Link>
          <h3>By: {element.director}</h3>
          <p>{element.rating}/10</p>
        </div>
      )
    })

    return (
      <div>
        {mappedMovies}
      </div>
    )
  }
}