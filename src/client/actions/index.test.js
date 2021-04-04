import ItemActionTypes from '../types';
import {
  fetchFailure,
  fetchItemDetailStart,
  fetchItemDetailSuccess,
  fetchItemsStart,
  fetchItemsSuccess,
} from '.';

describe('fetchItemsStart action', () => {
  it('should create the fetchItemsStart action', () => {
    expect(fetchItemsStart().type).toEqual(ItemActionTypes.FETCH_ITEMS_START);
  });
});

describe('fetchItemsSuccess action', () => {
  it('should create the fetchItemsSuccess action', () => {
    const mockItems = {
      author: {
        name: 'jeffer',
        lasname: 'sinza',
      },
      categories: [],
      items: [],
    };

    const action = fetchItemsSuccess(mockItems);
    expect(action.type).toEqual(ItemActionTypes.FETCH_ITEMS_SUCCESS);
    expect(action.payload).toEqual(mockItems);
  });
});

describe('fetchItemDetailStart action', () => {
  it('should create the fetchItemDetailStart action', () => {
    expect(fetchItemDetailStart().type).toEqual(
      ItemActionTypes.FETCH_ITEM_DETAIL_START,
    );
  });
});

describe('fetchItemDetailSuccess action', () => {
  it('should create the fetchItemDetailSuccess action', () => {
    const mockItemDetail = {
      author: {
        name: 'jeffer',
        lasname: 'sinza',
      },
      item: {
        id: '1',
      },
    };

    const action = fetchItemDetailSuccess(mockItemDetail);
    expect(action.type).toEqual(ItemActionTypes.FETCH_ITEM_DETAIL_SUCCESS);
    expect(action.payload).toEqual(mockItemDetail);
  });
});

describe('fetchFailure action', () => {
  it('should create the fetchFailure action', () => {
    const action = fetchFailure('error');

    expect(action.type).toEqual(ItemActionTypes.FETCH_FAILURE);
    expect(action.payload).toEqual('error');
  });
});
