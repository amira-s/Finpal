import React from "react";
import ReactTable from "react-table";
import moment from "moment";
import styled from "styled-components";
import "react-table/react-table.css";


const StyledTable = styled(ReactTable)`
  border: none!important;
  user-select: none!important;
`;

const Attachement = styled.a`
  display: block;
  width: 20px;
  height: 20px;
  background: url('https://i.imgur.com/EazJqMu.png') no-repeat;
  background-size: contain;
  background-position: center;
  margin: 0 auto;
`;

const Amount = styled.div`
  font-weight: 600;
  position: relative;
  text-align: right;
  &::after {
    margin-left: 5px;
    display: inline-block;
    position: relative;
    width: 15px;
    height: 15px;
    content: "${({ debit }) => (debit ? "▼" : "▲")}";
    color: ${({ debit, theme }) => (debit ? theme.color.red : theme.color.green)};
  }
`;

class Table extends React.Component {
  constructor(props) {
    super(props);
    const { data } = props;
    const columns = this.getColumns(data);
    this.state = {
      data,
      columns,
      selection: [],
    };
  }

  getColumns = (data) => {
    return [
      {
        id: "created_at",
        width: 120,
        Header: "DD-MM-YYYY",
        accessor: "created_at",
        Cell: ({ original: { created_at } }) => moment(created_at).format('DD-MM-YYYY'),
      },
      {
        id: "counterparty_name",
        width: 120,
        Header: "Counterparty Name",
        accessor: "counterparty_name"
      },
      {
        id: "operation_type",
        width: 120,
        Header: "Payment type",
        accessor: "operation_type"
      },
      {
        id: "amount",
        width: 120,
        Header: "Amount",
        accessor: "amount",
        Cell: ({ original: { amount, currency, debit } }) => (<Amount debit={debit}>{new Intl.NumberFormat('fr-FR', {
          style: 'currency', currency
        }).format(amount)}</Amount>), // used this to format amounts as FR currency, also replaced EUR with symbol
      },
      {
        id: "attachement",
        width: 50,
        Header: () => <Attachement />,
        accessor: "attachement",
        Cell: ({ original: { attachements: [ first ] } }) => {
          return <Attachement download="image" href={first.url || ''} target="_blank" />;
        }
      }
    ]
  }


  isSelected = key => {
    return this.props.selection.includes(key);
  };

  render() {
    const { data, columns } = this.state;

    const checkboxProps = {
      getTrProps: (state, rowInfo, column, instance) => {
        const { original: { id } } = rowInfo;
        const selected = this.isSelected(id);

        return {
          onClick: (e, handleOriginal) => {
            if (e.shiftKey) {
              this.props.toggleSelection(id);
            } else {
              this.props.select(id);
            }

            console.log("It was in this row:", rowInfo);

            if (handleOriginal) {
              handleOriginal();
            }
          },
          style: {
            padding: '0',
            backgroundColor: selected ? 'lightgreen' : 'inherit',
            color: selected ? 'white' : 'inherit',
          }
        };
      }
    };

    return (
      <StyledTable
        ref={r => (this.checkboxTable = r)}
        data={data}
        columns={columns}
        defaultPageSize={10}
        risezable={false}
        getTheadProps={() => ({
          style: {

            padding: "20px 0",
            boxShadow: 'none',
            borderBottom: '1px solid #aaa'
          }
        })}
        getTheadThProps={() => ({
          style: {
            padding: '0',
            borderRight: 'none',
          }
        })}
        getTdProps={() => ({
          style: {
            fontWeight: '600',
            padding: '20px 0',
            border: 'none',
            outline: 'none',
          }
        })}
        className="-highlight"
        {...checkboxProps}
      />
    );
  }
}

export default Table;
