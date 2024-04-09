import {BrowserRouter,Routes,Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import PopularMovies from './components/PopularMovies';
import UpcomingMovies from './components/UpcomingMovies';
import TopRatedMovies from './components/TopRatedMovies';
import MovieDetails from "./components/MovieDetails";
import './App.css';

function App() {
  return(
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<PopularMovies />} />
    <Route exact path="/upcoming-movies" element={<UpcomingMovies />} />
    <Route exact path="/top-rated-movies" element={<TopRatedMovies />} />
    <Route exact path="/movie/:id" element={<MovieDetails />} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
