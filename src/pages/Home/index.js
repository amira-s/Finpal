import React from 'react';
import styled from 'styled-components';
import PageContainer from 'components/PageContainer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;


const Home = () => {
  return (
    <PageContainer>
      Home
    </PageContainer>
  );
}

export default Home;
