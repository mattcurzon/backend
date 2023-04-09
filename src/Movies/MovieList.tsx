import { useState } from "react";
import {Movie} from "../types/Movie" 

function MovieList () {

    const [movieData, setMovieData] = useState<Movie[]>([])
    const fetchMovies = async () => {
        const response = await fetch('https://localhost:5001/movie');
        const temp = await response.json();
        setMovieData(temp);
    }
    fetchMovies()

    return (
        <>
        <div className='text-center'>
            <h1>The Collection</h1>
        </div>
        <div className="row justify-content-center">
            <div className="col-auto">
                <table className="table table-striped table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th>Category</th>
                            <th>Title</th>
                            <th>Year</th>
                            <th>Director</th>
                            <th>Rating</th>
                            <th>Edited</th>
                            <th>LentTo</th>
                            <th>Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movieData.map((m) => (
                            <tr key={m.movieId}>
                                <td>{m.category}</td>
                                <td>{m.title}</td>
                                <td>{m.year}</td>
                                <td>{m.director}</td>
                                <td>{m.rating}</td>
                                <td>{m.edited}</td>
                                <td>{m.lentTo}</td>
                                <td>{m.notes}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>   
        </>
    )
}

export default MovieList;