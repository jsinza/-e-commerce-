import React from 'react';
import { mount } from 'enzyme';
import { fetchItemDetailStart, fetchItemDetailSuccess, fetchItemsStart, fetchItemsSuccess } from '../actions';
import * as itemService from '../services';
import * as reducers from '../reducers';
import 'babel-polyfill';

import { useStore, StoreProvider, searchItems, getItem } from '.';

jest.mock('../services');
jest.mock('../reducers');

const ITEM = {
  'id': 'MLA907919730',
  'title': 'Cubre Zapato Zapatilla Silicona Impermeable Lluvia Acuaticas',
  'price': {
    'currency': 'ARS',
    'amount': 549,
    'decimals': 0,
  },
  'picture': 'http://http2.mlstatic.com/D_643035-MLA45049201013_032021-O.jpg',
  'condition': 'new',
  'free_shipping': false,
};

const Demo = () => {
  const { state: { item } } = useStore();
  return (<div className='demo'>{item.title}</div>);
};

describe('Context', () => {

  let wrapper;

  beforeEach(() => {
    reducers.INITIAL_STATE = { item: ITEM };
    wrapper = mount(<StoreProvider><Demo /></StoreProvider>);
  });

  it('', () => {
    expect(wrapper.find("[className='demo']").text()).toBe(ITEM.title);
  });

  it('', async () => {
    const dispatchMock = jest.fn();
    itemService.getItem.mockResolvedValue({ data: ITEM });
    const id = 'MLA680573238';
    await getItem(dispatchMock, id);
    expect(dispatchMock.mock.calls[0][0]).toMatchObject(fetchItemDetailStart());
    expect(dispatchMock.mock.calls[1][0]).toMatchObject(fetchItemDetailSuccess(ITEM));
  });

  it('', async () => {
    const dispatchMock = jest.fn();
    itemService.searchItems.mockResolvedValue({ data: ITEM });
    const query = 'zapatos';
    await searchItems(dispatchMock, query);
    expect(dispatchMock.mock.calls[0][0]).toMatchObject(fetchItemsStart());
    expect(dispatchMock.mock.calls[1][0]).toMatchObject(fetchItemsSuccess(ITEM));
  });
});
