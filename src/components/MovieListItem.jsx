
function MovieListItem({movie}) {
    return (
        <li className="movieTitle">
            <span>{movie.title}</span>
        </li>
    );
};

export default MovieListItem;