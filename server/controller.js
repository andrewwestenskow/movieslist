module.exports = {
  getMovies: async (req, res) => {
    const db = req.app.get('db')
    const movies = await db.get_all_movies()
    res.status(200).send(movies)
  },

  getMovieById: async (req, res) => {
    const db = req.app.get('db')
    const {id} = req.params
    const [movie] = await db.get_movie_by_id([+id])

    if(movie) {
      res.status(200).send(movie)
    } else {
      res.status(404).send('Movie not found')
    }
  }
}