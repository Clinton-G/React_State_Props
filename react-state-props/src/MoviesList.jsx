import React, { useState } from 'React';

const MoviesList = () => {
    const [movies, setMovies] = useState([
        {id: 1, title: 'Star Wars', discription: 'Discription About Star Wars.', genre: 'Sci-Fi'},
        {id: 2, title: 'The Matrix', discription: 'Discription About The Matrix', genre: 'Action'},
        {id: 3, title: 'Space Balls', discription: 'Discription About Space Balls', genre: 'Sci-Fi'},
        {id: 4, title: 'World War Z', discription: 'Discription About World War Z', genre: 'Action'},
    ]);

    const [showActionOnly, setShowActionOnly] = useState(false);
  
    const [showDetails, setShowDetails] = useState({});

    const toggleView = () => {
        setShowActionOnly((prevShowActionOnly) => !prevShowActionOnly);
    };

    const toggleDetails = (id) => {
        setShowDetails((prevShowDetails) => ({
        ...prevShowDetails,
        [id]: !prevShowDetails[id]
        }));
    };

    const removeMovie = (id) => {
        const updatedMovies = movies.filter((movie) => movie.id !== id);
        setMovies(updatedMovies);


    setShowDetails((prevShowDetails) => {
        const { [id]: _, ...rest } = prevShowDetails;
        return rest;
    });
    };


    const filteredMovies = showActionOnly
        ? movies.filter((movie) => movie.genre === 'Action')
        : movies;


return (
    <div>
        <h1>Favorite Movies</h1>
      
        <button onClick={toggleView}>
            {showActionOnly ? 'Show All Movies' : 'Show Only Action Movies'}
        </button>

    <ul>
        {filteredMovies.map((movie) => (
            <li key={movie.id}>
            <span
                style={{ cursor: 'pointer', textDecoration: 'underline' }}
                onClick={() => toggleDetails(movie.id)}
            >
                {movie.title}
            </span>
            <button onClick={() => removeMovie(movie.id)} style={{ marginLeft: '10px' }}>
                Remove
            </button>
            {showDetails[movie.id] && (
                <p>{movie.discription}</p>
            )}
            </li>
        ))}
    </ul>
    </div>
);
};

export default MoviesList;
