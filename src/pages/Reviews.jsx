import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';
import styled from 'styled-components';
import { MovieDB_API, spinStyles } from 'services';

const movieDB_API = new MovieDB_API();

export default function Reviews() {
  const [reviewsList, setReviewsList] = useState([]);
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
        const { results } = await movieDB_API.getMovieReviews(id);
        const data = results.map(({ id, author, content }) => ({
          id,
          author,
          content,
        }));

        setReviewsList(data);
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
        <ul>
          {reviewsList.map(({ id, author, content }) => (
            <Wrapper key={id}>
              <p>{author ? author : 'Guest'}</p>
              <p>{content ? content : 'No review yet'}</p>
            </Wrapper>
          ))}
        </ul>
      )}
    </>
  );
}

const Wrapper = styled.li`
  margin-bottom: 40px;
  padding: 40px;
  font-size: 20px;
  background-color: #292d33;
  color: white;
  text-align: justify;
  border-radius: 15px;

  & p:not(:last-child) {
    margin-bottom: 20px;
  }
`;
