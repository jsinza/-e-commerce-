import React from 'react';

import { useStore } from '../../context';

import './breadcrumb.styles.scss';

const BreadCrumb = () => {
  const {
    state: { categories },
  } = useStore();

  return (
    <div className='breadcrumb'>
      {categories.map((category, idx) => (
        // eslint-disable-next-line react/no-array-index-key
        <span className='breadcrumb__category' key={idx}>
          {category}
          <span>&#10095;</span>
        </span>
      ))}
    </div>
  );
};

export default BreadCrumb;
