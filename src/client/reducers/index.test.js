import ItemActionTypes from '../types';
import { reducer } from '.';

const initialState = {
  categories: [],
  author: null,
  items: null,
  isLoading: false,
  errorMessage: undefined,
  selectedItem: null,
};

describe('reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should set isLoading to true if fetchItemsStart action', () => {
    expect(
      reducer(initialState, { type: ItemActionTypes.FETCH_ITEMS_START })
        .isLoading,
    ).toBe(true);
  });

  it('should set isLoading to true if fetchItemDetailStart action', () => {
    expect(
      reducer(initialState, {
        type: ItemActionTypes.FETCH_ITEM_DETAIL_START,
      }).isLoading,
    ).toBe(true);
  });

  it('should set isLoading to false and items to payload if fetchItemsSuccess', () => {
    const mockItems = {
      author: {
        name: 'jeffer',
        lasname: 'sinza',
      },
      categories: [],
      items: [],
    };
    expect(
      reducer(initialState, {
        type: ItemActionTypes.FETCH_ITEMS_SUCCESS,
        payload: mockItems,
      }),
    ).toEqual({
      ...initialState,
      isLoading: false,
      items: mockItems.items,
      author: mockItems.author,
      categories: mockItems.categories,
    });
  });

  it('should set isLoading to false and selectedItem to payload if fetchItemDetailSuccess', () => {
    const mockItemDetail = {
      author: {
        name: 'jeffer',
        lasname: 'sinza',
      },
      item: {
        id: '1',
      },
    };
    expect(
      reducer(initialState, {
        type: ItemActionTypes.FETCH_ITEM_DETAIL_SUCCESS,
        payload: mockItemDetail,
      }),
    ).toEqual({
      ...initialState,
      isLoading: false,
      author: mockItemDetail.author,
      selectedItem: mockItemDetail.item,
    });
  });

  it('should set isLoading to false and errormessage to payload if fetchFailure', () => {
    expect(
      reducer(initialState, {
        type: ItemActionTypes.FETCH_FAILURE,
        payload: 'error',
      }),
    ).toEqual({
      ...initialState,
      isLoading: false,
      errorMessage: 'error',
    });
  });
});
