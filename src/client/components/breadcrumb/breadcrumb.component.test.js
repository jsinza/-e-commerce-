import React from 'react';
import 'babel-polyfill';
import { mount } from 'enzyme';
import BreadCrumb from './breadcrumb.component';

import * as context from '../../context';

const CATEGORIES = ['Auido', 'Audio y video'];

jest.mock('../../context');

describe('BreadCrumb Component', () => {

  let wrapper;

  beforeEach(() => {
    context.useStore.mockReturnValue({ state: { categories: CATEGORIES } });
    wrapper = mount(<BreadCrumb />);
  });

  it('should render BreadCrumb component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an equal number of Sections as the Categories', () => {
    expect(wrapper.find("[className='breadcrumb__category']")).toHaveLength(2);
  });

});
