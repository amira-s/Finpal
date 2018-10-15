import actionTypes from './actionTypes';

const initialState = {
  loading: false,
  error: null,
  data: null,
};

function TransactionReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_TRANSACTIONS:
      return { ...state, data: action.payload, loading: false };
    case actionTypes.FAILED_TRANSACTIONS:
      return { ...state, error: action.error, loading: false };
    case actionTypes.SET_LOADING:
      return { ...state, loading: !state.loading };
    case actionTypes.RESET:
      return initialState;
    default:
      return state;
  }
}

export default TransactionReducer;
