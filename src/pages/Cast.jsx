import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';

import { MovieDB_API, spinStyles } from 'services';
import { Ul, Li, ActorImg } from '../components/Movie/MovieInfo.styled';
import defaultActor from 'images/default-actor.png';

const movieDB_API = new MovieDB_API();

export default function Cast() {
  const [actorsList, setActorsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) {
      return;
    }
    setIsLoading(true);

    (async function getData() {
      try {
        const { cast } = await movieDB_API.getMovieCast(id);
        const results = cast
          .slice(0, 12)
          .map(({ id, profile_path, name, original_name, character }) => ({
            id,
            actorImgPath: profile_path,
            name,
            original_name,
            character,
          }));

        setActorsList(results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [id]);

  useEffect(() => {
    if (error) {
      navigate('*');
    }
  }, [error, navigate]);

  return (
    <>
      {isLoading ? (
        <TailSpin {...spinStyles} />
      ) : (
        <Ul>
          {actorsList.map(
            ({ id, actorImgPath, name, original_name, character }) => (
              <Li key={id}>
                <ActorImg
                  src={
                    actorImgPath
                      ? `https://image.tmdb.org/t/p/w500/${actorImgPath}`
                      : defaultActor
                  }
                  alt={name ? name : original_name}
                />
                <p>{name ? name : original_name}</p>
                <p>{character ? character : 'No information yet'}</p>
              </Li>
            )
          )}
        </Ul>
      )}
    </>
  );
}
