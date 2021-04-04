import React, { useEffect } from 'react';
import queryString from 'query-string';
import { useStore, searchItems } from '../../context';
import Items from '../../components/items/items.component';

import BreadCrumb from '../../components/breadcrumb/breadcrumb.component';

const Home = ({ location: { search } }) => {

  const { dispatch } = useStore();

  useEffect(() => {
    const { q } = queryString.parse(search);
    searchItems(dispatch, q);
  }, [search]);
  return (
    <div className='home'>
      <BreadCrumb />
      <Items />
    </div>
  );
};

export default Home;
