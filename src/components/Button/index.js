import styled from 'styled-components';

const Button = styled.div`
  background-image: ${({ theme }) => theme.color.orangeGradient};
  width: 200px;
  height: 40px;
  color: ${({ theme }) => theme.color.lightGrey};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Button;
