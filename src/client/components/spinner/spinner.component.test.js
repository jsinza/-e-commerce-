import React from 'react';
import 'babel-polyfill';
import { mount } from 'enzyme';
import Spinner from './spinner.component';

describe('Spinner Component', () => {

  const wrapper = mount(<Spinner />);;

  it('should render BreadCrumb component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
