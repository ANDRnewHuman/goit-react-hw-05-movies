import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import { MovieDB_API, spinStyles } from 'services';
import PreviewMovie from '../Movie/PreviewMovie';
import { Ul, Li, LinkStyled } from './MoviesList.styled';

const movieDB_API = new MovieDB_API();

export default function MoviesList({ query }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);

    (async function getData() {
      try {
        const { results, total_results } = await movieDB_API.getMovies(query);

        if (total_results === 0) {
          setMovies([]);
          throw new Error('Sorry, no movies found with that name.');
        }
        if (query) {
          toast.success(
            `There are found ${total_results} movies. Currently, only the first page will be displayed, but we are working on pagination with infinite scroll. Stay tuned for updates!`
          );
        }

        const moviesData = results.map(
          ({ id, poster_path, title, name, tagline }) => ({
            id,
            poster_path,
            title,
            name,
            tagline,
          })
        );
        setMovies(moviesData);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [query]);

  return (
    <>
      {isLoading ? (
        <TailSpin {...spinStyles} />
      ) : (
        <Ul>
          {movies.map(({ id, title, name, poster_path, tagline }) => (
            <Li key={id}>
              <LinkStyled to={`/movies/${id}`} state={{ from: location }}>
                <PreviewMovie
                  title={title}
                  name={name}
                  poster_path={poster_path}
                  tagline={tagline}
                />
              </LinkStyled>
            </Li>
          ))}
        </Ul>
      )}
    </>
  );
}

MoviesList.propTypes = {
  query: PropTypes.string,
};
