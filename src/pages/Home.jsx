import MoviesList from '../components/MoviesList/MoviesList';
import styled from 'styled-components';

const Title = styled.h1`
  color: #424254;
  font-size: 24px;
  text-align: center;
`;

export default function Home() {
  return (
    <>
      <Title>Presenting the epitome of today's the most popular films:</Title>
      <MoviesList />
    </>
  );
}
