const incomes = (state = [], action) => {
  switch (action.type) {
    case "ADD_INCOME":
      return {
        ...state,
        payPeriods: [
          ...state.payPeriods,
          {
            id: action.id,
            gross: action.income.gross,
            net: action.income.net,
            payDate: action.income.payDate, // TODO: Once I've made a date picker component then add in date!
            fixedCosts: [],
            variableBuckets: [],
            expenses: []
          }
        ],
        selectedPayPeriod: action.id
      };
    case "ADD_FIXED_COST":
      return {
        ...state,
        payPeriods: state.payPeriods.map(
          payPeriod =>
            payPeriod.id === state.selectedPayPeriod
              ? {
                  ...payPeriod,
                  fixedCosts: [...payPeriod.fixedCosts, action.fixedCost]
                }
              : payPeriod
        )
      };
    default:
      return state;
  }
};

export default incomes;
