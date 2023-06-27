import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import Search from 'components/Search/Search';
import MoviesList from '../components/MoviesList/MoviesList';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('name') ?? '';

  function updateSearchParams(name) {
    if (!name) {
      toast.info('Please, enter the movie name');
    } else if (movieName.toLowerCase() === name.toLowerCase()) {
      toast.info('The same search.');
      return;
    }
    setSearchParams(name ? { name } : {});
  }

  return (
    <>
      <Search defValue={movieName} onSubmit={updateSearchParams} />

      {movieName && <MoviesList API_path={`search/movie`} query={movieName} />}
    </>
  );
}
