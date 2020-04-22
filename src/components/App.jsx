
import MovieList from './MovieList.js';
import mockData from './mockData.js';

class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div>
                <div><h1>Movie List App</h1></div>
                <MovieList movies={mockData}/>
            </div>
        )
    }
}

export default App;