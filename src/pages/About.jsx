import styled from 'styled-components';

export default function About() {
  return (
    <Wrapper>
      <h2>About service</h2>
      <p>
        Welcome to the MovieMuse, where you can explore a vast collection of
        movie reviews, detailed information about films, and insights into
        various actors.
      </p>
      <p>
        The goal is to create an inclusive platform for movie enthusiasts. In
        the future, a registration system will be developed to allow users to
        add their favorite movies to personalized sections and mark films they
        have already watched. This will enable users to easily sort and organize
        their movie preferences.
      </p>
      <p>
        Additionally, a dedicated feature is planned to showcase highly
        anticipated movies that everyone is eagerly awaiting. Stay tuned for the
        latest updates on upcoming blockbusters and hidden gems.
      </p>
      <p>
        While currently I am the sole developer, collaboration is welcomed. If
        you are interested in contributing to the realization of this vision,
        feel free to join and help enhance the platform. Together, a truly
        immersive experience for movie enthusiasts worldwide can be created.
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 40px;
  font-size: 20px;
  background-color: #292d33;
  color: white;
  border-radius: 15px;

  & p:not(:last-child) {
    margin-bottom: 20px;
  }
`;
