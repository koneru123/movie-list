import MovieListItem from './MovieListItem.js';

function MovieList({
  movies
}) {
  return /*#__PURE__*/React.createElement("ul", {
    className: "movieListContainer"
  }, movies.map(movie => /*#__PURE__*/React.createElement(MovieListItem, {
    key: movie.title,
    movie: movie
  })));
}

;
export default MovieList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllTGlzdC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0SXRlbSIsIk1vdmllTGlzdCIsIm1vdmllcyIsIm1hcCIsIm1vdmllIiwidGl0bGUiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLGFBQVAsTUFBMEIsb0JBQTFCOztBQUVBLFNBQVNDLFNBQVQsQ0FBbUI7QUFBQ0MsRUFBQUE7QUFBRCxDQUFuQixFQUE2QjtBQUN6QixzQkFDSTtBQUFJLElBQUEsU0FBUyxFQUFDO0FBQWQsS0FDS0EsTUFBTSxDQUFDQyxHQUFQLENBQVdDLEtBQUssaUJBQUksb0JBQUMsYUFBRDtBQUFlLElBQUEsR0FBRyxFQUFFQSxLQUFLLENBQUNDLEtBQTFCO0FBQWlDLElBQUEsS0FBSyxFQUFFRDtBQUF4QyxJQUFwQixDQURMLENBREo7QUFLSDs7QUFBQTtBQUVELGVBQWVILFNBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW92aWVMaXN0SXRlbSBmcm9tICcuL01vdmllTGlzdEl0ZW0uanMnO1xuXG5mdW5jdGlvbiBNb3ZpZUxpc3Qoe21vdmllc30pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibW92aWVMaXN0Q29udGFpbmVyXCI+IFxuICAgICAgICAgICAge21vdmllcy5tYXAobW92aWUgPT4gPE1vdmllTGlzdEl0ZW0ga2V5PXttb3ZpZS50aXRsZX0gbW92aWU9e21vdmllfS8+KX1cbiAgICAgICAgPC91bD5cbiAgICApOyAgICBcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllTGlzdDsiXX0=