export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case "EDIT_TRANSACTION":
      const indexTransaction = state.transactions.indexOf(
        (transaction) => transaction.id === action.payload.id
      );
      const newTransaction = [...state.transactions];
      newTransaction[indexTransaction] = action.payload.transaction;
      return {
        ...state,
        transaction: newTransaction,
      };
    default:
      return state;
  }
};
