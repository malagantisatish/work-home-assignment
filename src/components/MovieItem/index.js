import {Link} from "react-router-dom"
import "./index.css"

const MovieItem = props=>{
    const {movieDetails} = props
    const {id,title,poster_path,vote_average} = movieDetails
   // console.log(id)
    const rating = Math.round(vote_average,1)
    return (
        <Link to={`/movie/${id}`} className="link">
            <li className="movie-item">
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} className="template-size"/>
                
                <p>{title}</p>
                <p>{rating}</p>
            </li>
            </Link>

        
    )
}


export default MovieItem