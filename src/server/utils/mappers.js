const author = {
  name: 'jeffer',
  lasname: 'sinza',
};

const getItemsSearch = ({ results = [], filters }, size) => {
  const categories = filters.find(filter => filter.id === 'category');
  return {
    author,
    categories: categories ?
      categories.values.reduce(
        (acumulator, category) => [
          ...acumulator,
          ...category.path_from_root.map(root => root.name),
        ],
        [],
      ) :
      [],
    items: results.slice(0, size).map(item => ({
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: item.price,
        decimals: 0,
      },
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
    })),
  };
};

const getItemsDetail = (item, { plain_text }) => {
  return {
    author,
    item: {
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: item.price,
        decimals: 2,
      },
      picture: item.pictures[0].url,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
      sold_quantity: item.sold_quantity,
      description: plain_text,
    },
  };
};

module.exports = { getItemsSearch, getItemsDetail };
