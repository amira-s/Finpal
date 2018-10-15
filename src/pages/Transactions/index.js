import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getTransactions } from 'common/transactions/actions';
import { Loader } from 'components';
import Table from './components/Table';
import SidePanel from './components/SidePanel';


const Container = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Header = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.color.orange};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
  height: 100%;
`;

class Transactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: [],
    };
  }

  componentWillMount() {
    if (!this.props.transactions) {
      this.props.dispatch(getTransactions());
    }
  }

  toggleSelection = (key) => {
    let selection = [...this.state.selection];
    const keyIndex = selection.indexOf(key);
    if (keyIndex >= 0) {
      selection = [
        ...selection.slice(0, keyIndex),
        ...selection.slice(keyIndex + 1)
      ];
    } else {
      selection.push(key);
    }
    this.setState({ selection });
  };

  select = (id) => {
    this.setState({ selection: [ id ]});
  }

  render() {
    const { transactions, loading } = this.props;
    const { selection } = this.state;

    return (
      <Container>
        <Content>
          <Header />
            <Wrapper>
            { transactions && !loading ? (
              <Table
                toggleSelection={this.toggleSelection}
                selection={selection}
                data={transactions}
                select={this.select}
                />) : <Loader />}
            </Wrapper>
        </Content>
        <SidePanel
          selection={selection}
          data={transactions || []}
        />
      </Container>
    );
  }
}

const mapStateToProps = ({ transactions: { loading, error, data} }) => ({
  loading,
  error,
  transactions: data,
});


export default connect(mapStateToProps)(Transactions);
