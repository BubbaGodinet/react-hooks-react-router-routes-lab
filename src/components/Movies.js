import React from "react";
import { movies } from "../data";

function Movies() {

  const displayMovies = movies.map(movie => <div> 
    <h3>{movie.title}</h3>
    <h4>{movie.time + " min"}</h4>
    <strong>Genres:</strong>
    <ul> 
      {movie.genres.map(genre => <li key = {genre}>{genre}</li>)}
    </ul>
    </div>)

  return (
  <div>
    <h1>Movies Page</h1>
    {displayMovies}
    </div>
  );
}

export default Movies;
