import styled from 'styled-components';
import imgPath from '../images/page-not-found.png';

export default function NotFound() {
  return (
    <Img src={imgPath} alt="Looks like this page was lost somewhere in Space" />
  );
}

const Img = styled.img`
  width: 500px;
  margin: 0 auto;
`;
