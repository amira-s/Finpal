import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

function Loader() {
  return (
    <Container>
      loader...
    </Container>
  );
}

export default Loader;
