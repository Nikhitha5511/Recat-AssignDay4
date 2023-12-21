
import './App.css';
import moviesData from './components/MoviesData';
import Body from './components/Body';


function App() {
  return (
    <div className="MoviesContainer">
     <h1>List of Movies</h1>
      <div className="movieList">
        {moviesData.map((movie, index) => (
            <Body 
            key={index}
            title={movie.title}
            description={movie.description}
            image={movie.thumbnail}
            rating={movie.rating}
            />
        ))}
      </div>
    </div>
  );
}

export default App;
