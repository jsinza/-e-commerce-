import React from 'react';
import { shallow } from 'enzyme';
import 'babel-polyfill';
import * as router from 'react-router-dom';
import Item from './item.component';

const PushMock = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: jest.fn(),
}));

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

describe('Item Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Item {...ITEM} />);
    router.useHistory.mockReturnValue({ push: PushMock });
  });

  it('should render Item component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should generate a redirect link for the item', () => {
    wrapper.find("[className='item']").props().onClick();
    expect(PushMock).toHaveBeenCalledTimes(1);
    expect(PushMock.mock.calls[0][0]).toBe(`/items/${ITEM.id}`);
  });

  it('should render the component titles and conditions', () => {
    expect(wrapper.find("[className='item__title']").text()).toBe(ITEM.title);
    expect(wrapper.find("[className='item__condition']").text()).toBe(ITEM.condition);

  });

});
