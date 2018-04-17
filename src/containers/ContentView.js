import React from "react";
import { connect } from "react-redux";
import { create, remove } from "../actions/deals";
import DataTable from "../components/DataRow";

import styled from "styled-components";

const numberFormat = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const ContentViewWrapper = styled.section`
  width: calc(100% - 200px);
  height: 100%;
  padding: 10px;
  float: left;
`;
const Label = styled.label`
  font-weight: bold;
`;
const LabeledInline = props => {
  return (
    <div>
      <Label>{props.label}: </Label>
      {props.children}
    </div>
  );
};
const DealCard = ({ deal }) => {
  return (
    <div>
      <LabeledInline label={"Name"}>{deal.name}</LabeledInline>
      <Label>Commitments</Label>
      {deal.commitments.map(c => {
        return (
          <div key={"comm:" + c.date.toISOString()}>
            {" "}
            - {c.date.toDateString()}: ${c.amount}
          </div>
        );
      })}
      <CashFlowsCard cashFlows={deal.cashFlows} />
    </div>
  );
};
const CashFlowsCard = ({ cashFlows }) => {
  const columns = [
    {
      "key": "date",
      "formatter": d => d.toDateString(),
      "label": "Date"
    },
    {
      "key": "type",
      "formatter": d => d == 'dist' ? 'Distribution' : 'Contribution',
      "label": "Cash Flow Type"
    },
    {
      "key": "amount",
      "formatter": numberFormat,
      "label": "Amount"
    },
  ]
  return (
    <DataTable width="800px" cols={columns} rows={cashFlows} />
  );
};

class ContentView extends React.Component {
  render() {
    let deals = Object.values(this.props.deals);
    return (
      <ContentViewWrapper>
        {deals.map(d => <DealCard key={d.id} deal={d} />)}
      </ContentViewWrapper>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    dispatch: {
      create: args => {
        dispatch(create(args));
      },
      remove: args => {
        dispatch(remove(args));
      }
    }
  };
};

const mapStateToProps = state => {
  return { deals: state.deals };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentView);
