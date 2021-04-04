import React from 'react';
import { shallow } from 'enzyme';
import 'babel-polyfill';
import * as router from 'react-router-dom';
import SearchBar from './search-bar.component';

const PushMock = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: jest.fn(),
}));

describe('SearchBar Component', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SearchBar />);
    router.useHistory.mockReturnValue({ push: PushMock });
  });
  it('should render SearchBar Component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call redirect when enter is pressed', () => {
    wrapper.find("[className='search-bar__search']").props().onKeyUp({ keyCode: 13 });
    expect(PushMock).toHaveBeenCalledTimes(1);
  });

  it('should redirect to the url of items with the search query', () => {
    wrapper.find("[className='search-bar__search']").props().onChange({
      target: {
        value: 'zapatos',
      },
    });
    wrapper.find("[className='search-bar__search']").props().onKeyUp({ keyCode: 13 });
    expect(PushMock.mock.calls[1][0]).toBe('/items?q=zapatos');
  });

});
