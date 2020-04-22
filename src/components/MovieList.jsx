import MovieListItem from './MovieListItem.js';

function MovieList({movies}) {
    return (
        <ul className="movieListContainer"> 
            {movies.map(movie => <MovieListItem key={movie.title} movie={movie}/>)}
        </ul>
    );    
};

export default MovieList;