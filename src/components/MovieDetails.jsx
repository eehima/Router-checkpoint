import { useParams, Link } from "react-router-dom"
import movies from "../components/movies";

const MovieDetails = () => {

    const {id} = useParams();
    const movie = movies.find((movie) => movie.id === parseInt(id));

    if (!movie) {
        return <div>Movie not found</div>
    }
  return (
    <div>
        <h1>{movie.title}</h1>
        <p>{movie.description}</p>
        <iframe
            width="560"
            height="315"
            src={movie.trailerLink}
            title={movie.title}
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
        ></iframe>

        <br/>
        <Link to="/">Back to Home</Link>
    </div>
  )
}

export default MovieDetails