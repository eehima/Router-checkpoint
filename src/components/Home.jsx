import { Link } from "react-router-dom"
import movies from "../components/movies"

const Home = () => {

  return (
    <div>
        <h1>Movie List</h1>
        <div>
            {movies.map((movie) => (
                <div key={movie.id}>
                    <h3>{movie.title}</h3>
                    <Link to={`/movie/${movie.id}`}>View Details</Link>
                </div>
            ))}
        </div>
    </div>
  );
}

export default Home