import React from 'react';
import 'babel-polyfill';
import { shallow } from 'enzyme';
import Currency from './currency.component';

const CURRENCY = {
  'currency': 'ARS',
  'amount': 549,
  'decimals': 0,
};

describe('Currency Component', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Currency {...CURRENCY} />);
  });

  it('should render Currency component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the component currency and decimals', () => {
    expect(wrapper.find("[className='currency']").text()).not.toBeUndefined();
    expect(wrapper.find("[className='currency__decimals']")).not.toBeUndefined();
  });
});
