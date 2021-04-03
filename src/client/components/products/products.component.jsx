import React from 'react';

import Product from '../product/product.component';
import Spinner from '../spinner/spinner.component';

import './product.styles.scss';

const Products = ({ products, isLoading }) => {
	return isLoading ? (
		<Spinner />
	) : (
		<div className='products'>
			{products.map((product) => (
				<Product
					key={product.id}
					id={product.id}
					imageUrl={product.picture}
					price={product.price}
					condition={product.condition}
					title={product.title}
					free_shipping={product.free_shipping}
				/>
			))}
		</div>
	);
};



export default Products;
