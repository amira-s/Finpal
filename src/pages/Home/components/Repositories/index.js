import React from 'react';
import styled from 'styled-components';
import Repository from './Repository';
import SearchBar from './SearchBar';
import { StripedBar } from 'components';

const Bar = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 20px;
`;

const Title = styled.div`
  font-size: 2em;
  width: 100%;
  font-weight: 800;
  text-align: left;
  margin: 0 0 5px 0;
  justify-self: flex-end;
  background: -webkit-linear-gradient(#f55496, #ed1b5b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

function Repositories({ repos }) {
  return repos ? (
    <Container>
      <Bar>
        <Title>Repositories</Title>
        <StripedBar color="pink" width={15} />
        <StripedBar color="yellow" width={50} />
        <StripedBar color="blue" width={30} />
        <StripedBar color="blue" width={5} offset={5} />
      </Bar>
      <SearchBar />
      { repos.map((repo, i) => <Repository key={repo.id} detail={repo} />)}
    </Container>
  ) : null;
}

export default Repositories;
