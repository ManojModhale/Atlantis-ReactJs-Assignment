import React, { useState, useEffect } from 'react';

function MoviesScreen() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://dummyapi.online/api/movies');
        if (!response.ok) {
          throw new Error('Failed to fetch movies');
        }
        const data = await response.json();
        setMovies(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const moviesList = [];
  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    moviesList.push(
      <li key={i}>
        <strong>{movie.title}</strong> - {movie.year}
      </li>
    );
  }

  return (
    <div>
      <h2>Movies</h2>
      <ul>{moviesList}</ul>
    </div>
  );
}

export default MoviesScreen;
