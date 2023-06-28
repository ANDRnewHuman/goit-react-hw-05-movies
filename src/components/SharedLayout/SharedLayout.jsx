import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { spinStyles } from 'services';
import {
  Container,
  Header,
  Main,
  Logo,
  StyledNavLink,
  StyledLink,
} from './SharedLayout.styled';
import logoImage from '../../images/logoo.png';

export default function SharedLayout() {
  return (
    <>
      <Container>
        <Header>
          <StyledLink to="/">
            <Logo src={logoImage} alt="Logo" />
          </StyledLink>
          <nav>
            <StyledNavLink to="/">Home</StyledNavLink>
            <StyledNavLink to="/movies">Movies</StyledNavLink>
            <StyledNavLink to="/about">About</StyledNavLink>
          </nav>
        </Header>

        <Main>
          <Suspense fallback={<TailSpin {...spinStyles} />}>
            <Outlet />
          </Suspense>
        </Main>
      </Container>
      <ToastContainer autoClose={2000} />
    </>
  );
}
