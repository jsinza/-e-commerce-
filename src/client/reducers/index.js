import ItemActionTypes from '../types';

export const INITIAL_STATE = {
  categories: [],
  author: null,
  items: null,
  isLoading: false,
  errorMessage: undefined,
  selectedItem: null,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ItemActionTypes.FETCH_ITEM_DETAIL_START:
    case ItemActionTypes.FETCH_ITEMS_START:
      return {
        ...state,
        isLoading: true,
        selectedItem: null,
        items: null,
      };
    case ItemActionTypes.FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: action.payload.items,
        author: action.payload.author,
        categories: action.payload.categories,
      };
    case ItemActionTypes.FETCH_ITEM_DETAIL_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        author: action.payload.author,
        selectedItem: action.payload.item,
      };
    }
    case ItemActionTypes.FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

