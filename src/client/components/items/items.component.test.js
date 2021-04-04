import React from 'react';
import { shallow } from 'enzyme';
import 'babel-polyfill';
import Items from './items.component';

import * as context from '../../context';

jest.mock('../../context');

const ITEMS = [
  {
    'id': 'MLA680573238',
    'title': 'Zapato Vulcano',
    'price': {
      'currency': 'ARS',
      'amount': 2199,
      'decimals': 0,
    },
    'picture': 'http://http2.mlstatic.com/D_645465-MLA31037702912_062019-O.jpg',
    'condition': 'new',
    'free_shipping': false,
  }];

describe('Items Component', () => {

  let wrapper;

  it('should render Items Component', () => {
    context.useStore.mockReturnValue({ state: { items: ITEMS, isLoading: false } });
    wrapper = shallow(<Items />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the items when you have already loaded the data', () => {
    context.useStore.mockReturnValue({ state: { items: ITEMS, isLoading: false } });
    wrapper = shallow(<Items />);
    expect(wrapper.find("[className='items']")).toHaveLength(1);
  });

  it('should not show the items if the data has not been loaded', () => {
    context.useStore.mockReturnValue({ state: { items: ITEMS, isLoading: true } });
    wrapper = shallow(<Items />);
    expect(wrapper.find("[className='items']")).toHaveLength(0);
  });

});
