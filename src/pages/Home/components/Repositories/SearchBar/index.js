import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Button from 'components/Button';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  margin: 20px 0;
  align-items: center;
  justify-content: space-between;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 3px;
  background-color: #ffffff;
  outline: none;
  border: none;
  width: 80%;
`;

class SearchBar extends PureComponent {
  render() {
    return (
      <Container>
        <Input placeholder="Filter repositories..."/>
      </Container>
    );
  }
}

export default SearchBar;