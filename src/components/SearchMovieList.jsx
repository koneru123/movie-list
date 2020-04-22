
function SearchMovieList(props) {
    return (
        <div className="moviesSearchContainer" >
            <form>
                <input type="search" id="site-search" name="q" placeholder="Search..."
                    aria-label="Search through site content" />

                <button className="goBtn">Go!</button>
            </form>
        </div>
    );
}

export default SearchMovieList;