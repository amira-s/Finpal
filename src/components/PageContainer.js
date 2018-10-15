import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;



const Content = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  ${'' /* padding: 20px; */}
`;

const PageContainer = ({ children }) => {
  return (
    <Container>
      <Content>
        {children}
      </Content>
    </Container>
  );
}

export default PageContainer;
