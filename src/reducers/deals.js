import * as types from "../actions/actionTypes";

const initialState = {
  deals: [
    {
      id: 0,
      name: "Buckley's Buckles",
      commitments: [
        {
          date: new Date("Jan 1, 2017"),
          amount: 100000
        },
        {
          date: new Date("Jul 1, 2017"),
          amount: 150000
        }
      ],
      navs: [
        {
          date: new Date("Jul 1, 2017"),
          amount: 150000
        }
      ],
      cashFlows: [
        {
          id: 12,
          date: new Date("Jun 30, 2017"),
          type: "cont",
          amount: 1000
        },
        {
          id: 13,
          date: new Date("Sep 30, 2017"),
          type: "cont",
          amount: 1000
        },
        {
          id: 14,
          date: new Date("Dec 31, 2016"),
          type: "cont",
          amount: 2000
        },
        {
          id: 0,
          date: new Date("Mar 31, 2017"),
          type: "cont",
          amount: 1000
        },
        {
          id: 1,
          date: new Date("Jun 30, 2017"),
          type: "cont",
          amount: 1000
        },
        {
          id: 2,
          date: new Date("Jul 10, 2017"),
          type: "dist",
          amount: -600
        },
        {
          id: 3,
          date: new Date("Sep 30, 2017"),
          type: "cont",
          amount: 1000
        },
        {
          id: 4,
          date: new Date("Aug 01, 2017"),
          type: "dist",
          amount: -800
        },
        {
          id: 5,
          date: new Date("Dec 31, 2017"),
          type: "cont",
          amount: 1000
        },
        {
          id: 6,
          date: new Date("Mar 31, 2018"),
          type: "cont",
          amount: 1000
        },
        {
          id: 7,
          date: new Date("Apr 19, 2018"),
          type: "dist",
          amount: -900
        },
        {
          id: 8,
          date: new Date("Jun 30, 2018"),
          type: "cont",
          amount: 1000
        },
        {
          id: 9,
          date: new Date("Sep 30, 2018"),
          type: "cont",
          amount: 1000
        },
        {
          id: 10,
          date: new Date("Aug 22, 2018"),
          type: "dist",
          amount: -500
        },
        {
          id: 11,
          date: new Date("Dec 31, 2018"),
          type: "cont",
          amount: 1000
        }
      ]
    }
  ]
};

const handleCreateCashFlow = (state, cashFlow) => {
  state.deals.find(d => d.id === cashFlow.deal_id).cashFlows.push(cashFlow);
  return state;
};

const handleCreateDeal = (state, deal) => {
  state.deals.push(deal);
  return state;
};

const handleDeleteCashFlow = (state, cashFlow) => {
  let deal = state.deals.find(d => d.id === cashFlow.deal_id);
  let index = deal.cashFlows.findIndex(cf => cf.id === cashFlow.id);
  deal.cashFlows.splice(index, 1);
  return state;
};

const handleDeleteDeal = (state, dealId) => {
  let index = state.deals.findIndex(d => d.id === dealId);
  if (index === -1) return state;
  state.deals.splice(index, 1);
  return state;
};

const dealsReducer = (deals, action) => {
  if (deals === undefined) {
    deals = initialState.deals;
  }
  let newState = { ...deals };
  switch (action.type) {
    case types.CREATE_DEAL:
      return handleCreateDeal(newState, action.payload);
    case types.CREATE_CASH_FLOW:
      return handleCreateCashFlow(newState, action.payload);
    case types.DELETE_DEAL:
      return handleDeleteDeal(newState, action.payload.deal_id);
    case types.DELETE_CASH_FLOW:
      return handleDeleteCashFlow(newState, action.payload);
    default:
      return newState;
  }
};

export default dealsReducer;
