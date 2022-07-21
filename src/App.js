import {useEffect, useState} from 'react'
import './App.css';

const App = () => {

 // a025e227
//  Poster: "https://m.media-amazon.com/images/M/MV5BOWIwNDMzZDQtYTg1OC00ODBjLTkxZWItMzgzMzZiNjIzZGI0XkEyXkFqcGdeQXVyODIwODk5Njc@._V1_SX300.jpg"
// Title: "Beautiful UnDefined"
// Type: "movie"
// Year: "2017"
// imdbID: "tt7639764"
    const [movies, setMovies] = useState([]);
    console.log(movies);
    const [title,settitle] = useState('');
    const API_URL = 'https://www.omdbapi.com/?apikey=a025e227';
    const searchMovies = async (title) =>{
        if(title){
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search)
    }

    }
    useEffect(() =>{
        searchMovies(title);
    },[]);
  return (
    <div className='app'>
        <div className="header">
        <h1>Movies App</h1>
        </div>
        <div className="search">
            <div className="container">
                <input type="text" value={title} onChange={(e)=> settitle(e.target.value)}/>
                <i className='fas fa-search' onClick={()=> {searchMovies(title)}}></i>
            </div>
        </div>
       <div className="movies">
                           
                { movies?.length > 0 ? movies.map((movie)=>(
                    <div className="movie" style={{backgroundImage:`url('${movie.Poster != 'N/A' ? movie.Poster : `https://m.media-amazon.com/images/G/01/imdb/images/social/imdb_logo._CB410901634_.png`}')`}}>
                            <p>{movie.Year}</p>
                        <div className="info">
                            <span>{movie.Type}</span>
                            <p>{movie.Title}</p>
                        </div>
                    </div>  
                )):
                <>
                    <h1>Movie Not Found</h1>
                </>
            }

        </div>
    </div>
        
  )
}

export default App;