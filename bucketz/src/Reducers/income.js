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
        ]
      };
    // return [
    //   ...state,
    //   payPeriods[
    //     {
    //       id: action.id,
    //       gross: action.income.gross,
    //       net: action.income.net
    //     }
    //   ]
    // ];
    case "TOGGLE_TODO":
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export default incomes;
