import { Link } from 'react-router-dom';
import { FiCornerUpLeft } from 'react-icons/fi';
import styled from 'styled-components';

export const IconBack = styled(FiCornerUpLeft)`
  width: 35px;
  height: 35px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.3);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
  margin-bottom: 60px;
  padding-right: 20px;
  background-color: #6a7d98;
  border-radius: 20px;
`;

export const MovieImg = styled.img`
  width: 400px;
  min-height: 350px;
  border-radius: 20px;
`;

export const Item = styled.li`
  color: white;
  font-size: 18px;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const StyledLink = styled(Link)`
  font-size: 24px;
`;

export const AddInfoWrapper = styled.div`
  display: flex;
  margin-top: 30px;
  column-gap: 20px;
`;
export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 40px 30px;
`;

export const Li = styled.li`
  width: 230px;
  text-align: center;
`;

export const ActorImg = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 20px;
`;
