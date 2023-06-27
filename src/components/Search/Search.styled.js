import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  border: none;
  background: none;
  outline: none;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.3);
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 400px;
  margin: 0 auto;
  padding: 0 15px;
  background-color: white;
  overflow: hidden;
  border-radius: 30px;

  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  &:focus-within {
    outline: 5px solid #ae8fd0;

    ${Btn} {
      transform: scale(1.3);
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const SearchIcon = styled(AiOutlineSearch)`
  width: 25px;
  height: 25px;
`;
