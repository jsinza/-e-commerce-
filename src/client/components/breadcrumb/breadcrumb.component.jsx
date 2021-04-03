import React from 'react';

import './breadcrumb.styles.scss';

const BreadCrumb = ({ categories }) => {
	return (
		<div className='breadcrumb'>
			{categories.map((category, idx) => (
				<span className='breadcrumb__category' key={idx}>
					{category}
					<span>&#10095;</span>
				</span>
			))}
		</div>
	);
};


export default BreadCrumb;
