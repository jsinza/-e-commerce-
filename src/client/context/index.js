import React, { createContext, useReducer } from 'react';
import { reducer, INITIAL_STATE } from '../reducers';
import { fetchFailure, fetchItemDetailStart, fetchItemDetailSuccess, fetchItemsStart, fetchItemsSuccess } from '../actions';
import * as itemService from '../services';

const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const value = { state, dispatch };

  return (
    <StoreContext.Provider value={value}>
      {children}
    </StoreContext.Provider>
  );
};

const useStore = () => {
  const context = React.useContext(StoreContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return context;
};

const searchItems = async (dispatch, query) => {
  dispatch(fetchItemsStart(query));
  try {
    const { data } = await itemService.searchItems(query);
    dispatch(fetchItemsSuccess(data));
  } catch ({ message }) {
    dispatch(fetchFailure(message));
  }
};

const getItem = async (dispatch, id) => {
  dispatch(fetchItemDetailStart());
  try {
    const { data } = await itemService.getItem(id);
    dispatch(fetchItemDetailSuccess(data));
  } catch ({ message }) {
    dispatch(fetchFailure(message));
  }
};

export { useStore, StoreProvider, searchItems, getItem };
