let nextTodoId = 0;

export const addIncome = income => ({
  type: "ADD_INCOME",
  id: nextTodoId++,
  income
});
