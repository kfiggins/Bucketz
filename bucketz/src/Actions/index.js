let payPeriodId = 1;

export const addIncome = income => ({
  type: "ADD_INCOME",
  id: payPeriodId++,
  income
});

export const addFixedCost = fixedCost => ({
  type: "ADD_FIXED_COST",
  fixedCost
});
