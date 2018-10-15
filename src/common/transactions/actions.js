// import api from 'services/api';
import api from 'services/apiMock';
import actionTypes from './actionTypes';

const setTransactions = payload => ({
  type: actionTypes.SET_TRANSACTIONS,
  payload,
});

export const setError = payload => ({
  type: actionTypes.FAILED_TRANSACTIONS,
  payload,
});

const toggleLoading = payload => ({
  type: actionTypes.SET_LOADING,
  payload,
});

const API_URL = 'https://cors.io/?http://private-3f9656-paymiuminterviews.apiary-mock.com/transactions';

export function getTransactions() {
  return (dispatch) => {
    dispatch(toggleLoading());
    api.get(API_URL)
    .then((data) => {
      dispatch(toggleLoading());
      return dispatch(setTransactions(data[0].transactions));
    })
    .catch((err) => {
      console.error('fetch transactions', err);
      dispatch(toggleLoading());
      dispatch(setError(err));
    });
  };
}
