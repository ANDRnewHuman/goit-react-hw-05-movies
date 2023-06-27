import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Ul = styled.ul`
  display: grid;
  margin-top: 30px;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 25px;
`;

export const Li = styled.li`
  color: white;
  background-color: #5b4865;
  border-radius: 20px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
  }
`;

export const LinkStyled = styled(Link)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 100%;
`;
