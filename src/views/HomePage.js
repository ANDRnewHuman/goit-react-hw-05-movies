import { useState, useEffect } from 'react';
import MoviesGallery from '../components/MoviesGallery';
import { fetchTrendingMovies } from '../services/api';
import '../style.css';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(request => setMovies(request.results));
  }, []);

  // console.log(movies);
  return (
    <>
      <h1>Trending today</h1>

      <MoviesGallery movies={movies} />
    </>
  );
}
