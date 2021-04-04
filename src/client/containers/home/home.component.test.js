
import React from 'react';
import { mount } from 'enzyme';
import 'babel-polyfill';
import Home from './home.component';
import * as context from '../../context';

jest.mock('../../context');

const LOCATION = {
  search: {
    q: 'zapatos',
  },

};

describe('Home Components', () => {
  let wrapper;

  beforeEach(() => {
    context.useStore.mockReturnValue({ dispatch: jest.fn(), state: { categories: [], items: [] } });
    wrapper = mount(<Home location={LOCATION} />);
  });

  it('should render Home component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the home container', () => {
    expect(wrapper.find("[className='home']")).toHaveLength(1);
  });

  it('should get the search parameters', () => {
    expect(context.searchItems.mock.calls[2][1]).toBe(LOCATION.q);
  });
});

