import { Header } from './Header';
import { MovieCard } from "./MovieCard";

import '../styles/content.scss';

interface Movie {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface ContentProps {
  selectedGenre: {
    title: string;
  };
  movies: Movie[];
}

export function Content({selectedGenre, movies}: ContentProps) {
  return(
    <div className="container">
      <Header selectedGenre={selectedGenre}/>
      
      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}