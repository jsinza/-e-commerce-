const router = require('express').Router({ strict: true });
const axios = require('axios');
const { GeneralError, BadRequest } = require('../utils/errors');
const { getItemsSearch, getItemsDetail } = require('../utils/mappers');

const baseUrl = 'https://api.mercadolibre.com/';

const requestRejected = (status) => {
  throw new GeneralError(
    `item request rejected with status:: ${status}`,
  );
};

const badRequest = (value) => {
  throw new BadRequest(`required ${value}`);
};

router.get('/items', async (req, res, next) => {
  try {
    const { q, size = 4 } = req.query;

    if (!q) badRequest('query');

    const response = await axios.get(`${baseUrl}sites/MLA/search`, {
      params: { q },
    });

    if (response.status === 200) {
      res.json(getItemsSearch(response.data, size));
    } else {
      requestRejected(response.status);
    }
  } catch (error) {
    next(error);
  }
});

router.get('/items/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) badRequest('id');

    const [itemResponse, destailResponse] = await Promise.all([
      axios.get(`${baseUrl}items/${id}`),
      axios.get(`${baseUrl}items/${id}/description`),
    ]);

    if (itemResponse.status !== 200) {
      requestRejected(response.status);
    }

    if (destailResponse.status !== 200) {
      requestRejected(response.status);
    }

    res.json(getItemsDetail(itemResponse.data, destailResponse.data));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
