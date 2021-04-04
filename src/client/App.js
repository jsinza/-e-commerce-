import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import './App.scss';

import SearchBar from './components/search-bar/search-bar.component';
import Home from './containers/home/home.component';
import Detail from './containers/detail/detail.component';
import NotFound from './containers/not-found/not-found.component';

const App = () => (
  <div>
    <SearchBar />
    <div className='container'>
      <Switch>
        <Route exact path='/' />
        <Route exact path='/items' component={Home} />
        <Route exact path='/items/:id' component={Detail} />
        <Route exact path='/404' component={NotFound} />
        <Route path='*'>
          <Redirect to='/404' />
        </Route>
      </Switch>
    </div>
  </div>
);

export default App;
