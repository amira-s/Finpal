import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.color.white};
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 400px;
  overflow: hidden;
`;

const Content = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.color.pureWhite};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
`;

const Details = styled.div`
`;

const Item = styled.div`
  color: ${({ theme }) => theme.color.orange};
  font-weight: bold;
`;


const Field = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 40px;
  width: 100%;
`;

const Key = styled.div`
  font-weight: bold;
  text-align: left;
  width: 100%;
`;

const Val = styled.div`
  text-align: right;
  width: 100%;
`;

const Title = styled.div`
  align-self: flex-start;
  margin-bottom: 20px;
`;

function SidePanel({ selection, data }) {
  const content = selection.length > 1 ? selection : data.find((f) => (f.id === selection[0]));
  return (
    <Container>
      <Header />
      <Content>
        {!selection || !selection.length ? "Click on one or several transactions to see details" : (
          <Details>
            <Title>
              { Array.isArray(content) && 'Selected element IDs :'}
            </Title>
            { Array.isArray(content) ? content.map((id) => (<Item key={id}>{id}</Item>)): Object.entries(content).map(([ key, val ]) => (<Field key={key}>
            <Key>{key}:</Key>
            <Val>{JSON.stringify(val)}</Val>
            </Field>))}
          </Details>
        )}
      </Content>
    </Container>
  );
}

export default SidePanel;