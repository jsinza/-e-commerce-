
import React from 'react';
import { mount } from 'enzyme';
import 'babel-polyfill';
import * as router from 'react-router-dom';
import Detail from './detail.component';
import * as context from '../../context';

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

jest.mock('../../context');

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

const ITEM_ID = 'SEJFEIZANME';
describe('Detail Component', () => {
  let wrapper;
  beforeEach(() => {
    router.useParams.mockReturnValue({ id: ITEM_ID });
    context.useStore.mockReturnValue({ state: { isLoading: false, selectedItem: ITEM, categories: [] } });
    wrapper = mount(<Detail />);
  });
  it('should render Detail Component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should get the search parameters', () => {
    expect(context.getItem.mock.calls[1][1]).toBe(ITEM_ID);
  });

  it('should render the home container and item title', () => {
    expect(wrapper.find("[className='detail']")).toHaveLength(1);
    expect(wrapper.find("[className='detail__description']")).toHaveLength(1);
  });

});
