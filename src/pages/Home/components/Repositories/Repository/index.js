import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import moment from 'moment';
import { Switch } from 'components';
import { activateRepo, disableRepo } from 'common/repository/actions';
import { Link } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.blue};
  box-shadow: 0 0 27px 0 rgba(0, 0, 0, 0.1);
  height: 80px;
  width: 100%;
  margin: 10px;
  @media(max-width: 800px) {
    width: 100%;
  }
  &:hover {
    box-shadow: 1px 0px 8px 3px rgba(149, 99, 194, 0.3);
  }
  transition: all 0.3s ease-out;
`;

const Content = styled.div`
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  margin: 10px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Name = styled(Link)`
  font-size: 20px;
  margin-bottom: 5px;
  width: 100%;
  opacity: 1;
  &:hover {
    ${'' /* color: #f55496; */}
    opacity: 0.6;
    ${'' /* font-weight: bolder; */}
    ${'' /* font-style: italic; */}
  }
  transition: all 0.2s ease-in-out;
`;

const Logo = styled(Link)`
  margin: 10px;
  width: 1.5em;
  height: 1.5em;
  background-image: url(${({ isPrivate }) => (isPrivate ? '/img/private.svg' : '/img/public.svg')});
  background-position: center;
  background-size: contain;
`;

const Description = styled.div`
  font-size: 16px;
  flex: 1;
`;

const PushedAt = styled.div`
  font-size: 12px;
  justify-self: flex-end;
  opacity: 0.8;
`;

const Git = styled.div`
`;

const Wrapper = styled.div`
  display: flex;
  margin: 25px;

`;

class Repository extends Component {
  handleChange = (v) => {
    const { detail: { name, owner: { login } }, dispatch } = this.props;
    if (v) {
      dispatch(activateRepo(name, login));
    } else {
      dispatch(disableRepo(name, login));
    }
  }

  render() {
    const { detail } = this.props;
    const { name, git_url, owner: { login }, private: isPrivate, description, pushed_at, dockerci } = detail;
    return (
      <Container>
        <Logo  to={`/${login}/${name}`} isPrivate={isPrivate} />
        <Content>
          <Name  to={`/${login}/${name}`}>{name}</Name>
          <Description>{description}</Description>
          <PushedAt>Last pushed {moment(pushed_at).fromNow()}</PushedAt>
        </Content>
        <Wrapper>
          <Git href={git_url} />
          <Switch checked={!!dockerci} onChange={this.handleChange} />
        </Wrapper>
      </Container>
    );
  }
}

export default connect()(Repository);
