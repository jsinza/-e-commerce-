const router = require('express').Router({ strict: true });
const axios = require('axios');
const { GeneralError, BadRequest } = require('../utils/errors');
const { getItemsSearch, getItemsDetail } = require('../utils/itemsParser');

const baseUrl = 'https://api.mercadolibre.com/';

router.get('/items', async (req, res, next) => {
	try {
		const { q } = req.query;

		console.log(q)

		if (!q) throw new BadRequest('Valor faltante');

		const response = await axios.get(`${baseUrl}sites/MLA/search`, {
			params: { q },
		});

		if (response.status === 200) {
			res.json(getItemsSearch(response.data,4));
		} else {
			throw new GeneralError(
				`petición rechazada con estado: ${response.status}`
			);
		}
	} catch (error) {
		next(error);
	}
});

router.get('/items/:id', async (req, res, next) => {
	try {
		const { id } = req.params;

		if (!id) throw new BadRequest('Valor faltante');

		const [itemResponse, destailResponse] = await Promise.all([
			axios.get(`${baseUrl}items/${id}`),
			axios.get(`${baseUrl}items/${id}/description`),
		]);

		if (itemResponse.status !== 200) {
			throw new GeneralError(
				`petición de item rechazada con estado: ${response.status}`
			);
		}

		if (destailResponse.status !== 200) {
			throw new GeneralError(
				`petición de detalle rechazada con estado: ${response.status}`
			);
		}

		res.json(getItemsDetail(itemResponse.data, destailResponse.data));
	} catch (error) {
		next(error);
	}
});

module.exports = router;
