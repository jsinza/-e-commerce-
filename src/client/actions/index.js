import ItemActionTypes from '../types';

export const fetchItemsStart = () => ({
  type: ItemActionTypes.FETCH_ITEMS_START,
});

export const fetchItemsSuccess = items => ({
  type: ItemActionTypes.FETCH_ITEMS_SUCCESS,
  payload: items,
});

export const fetchItemDetailStart = () => ({
  type: ItemActionTypes.FETCH_ITEM_DETAIL_START,
});

export const fetchItemDetailSuccess = item => ({
  type: ItemActionTypes.FETCH_ITEM_DETAIL_SUCCESS,
  payload: item,
});

export const fetchFailure = errorMessage => ({
  type: ItemActionTypes.FETCH_FAILURE,
  payload: errorMessage,
});
