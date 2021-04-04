import React from 'react';

import { Switch, Route } from 'react-router-dom';

import './App.scss';

import SearchBar from './components/search-bar/search-bar.component';
import Home from './containers/home/home.component';
import Detail from './containers/detail/detail.component';

const App = () => (
  <div>
    <SearchBar />
    <div className='container'>
      <Switch>
        <Route exact path='/' />
        <Route exact path='/items' component={Home} />
        <Route exact path='/items/:id' component={Detail} />
      </Switch>
    </div>
  </div>
);

export default App;
