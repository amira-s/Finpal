import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import 'global-styles';
import history from 'common/history';
import * as Pages from './pages';
import configureStore from 'common/store';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SideBar = styled.div`
  display: flex;
  min-width: 250px;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: #3E4750;
`;

const Item = styled(Link)`
  font-size: 16px;
  padding: 15px 40px;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  color: ${({ theme }) => theme.color.grey};
`;

const Header = styled.div`
  padding: 20px 40px;
  font-weight: bold;
  margin-bottom: 50px;
  width: 100%;
  letter-spacing: 1px;
  text-align: left;
  text-transform: uppercase;
  font-size: 22px;
  background-color: #363D45;
  color: ${({ theme }) => theme.color.white};
`;

const store = configureStore({}, history);

const Content = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
        <ConnectedRouter history={history}>
          <Switch>
            <Container>
              <SideBar>
                <Header>Finpal</Header>
                <Item to="/">Overview</Item>
                <Item to="/transactions">Transactions</Item>
                <Divider />
              </SideBar>
              <Content>
                <Route exact path="/" component={Pages.Home} />
                <Route exact path="/transactions" component={Pages.Transactions} />
              </Content>
            </Container>
          </Switch>
        </ConnectedRouter>
    </ThemeProvider>
  </Provider>
);

export default App;
