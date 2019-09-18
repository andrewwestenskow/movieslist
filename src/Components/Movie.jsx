import React, {Component} from 'react'
import axios from 'axios'

export default class Movie extends Component {

  state = {
    movie: {}
  }

  async componentDidMount(){
    const movie = await axios.get(`/api/movies/${this.props.match.params.id}`)
    if(movie.data === 'Movie not found'){
      this.setState({
        movie: {
          title: 'NOPE'
        }
      })
    } else {
      this.setState({
        movie: movie.data
      })
    }
  }

  async componentDidUpdate(prevProps){
    if(prevProps !== this.props){
      const movie = await axios.get(`/api/movies/${this.props.match.params.id}`)
      if(movie.data === 'Movie not found'){
        this.setState({
          movie: {
            title: 'NOPE'
          }
        })
      } else {
        this.setState({
          movie: movie.data
        })
      }
    }
  }

  render(){
    return(
      <div>
        <h1>{this.state.movie.title}</h1>
        <h3>By: {this.state.movie.director}</h3>
        <p>{this.state.movie.rating}/10</p>
      </div>
    )
  }
}