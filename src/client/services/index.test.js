import * as axios from 'axios';
import { getItem, searchItems } from '.';
import 'babel-polyfill';

jest.mock('axios');

describe('Services', () => {

  it('should get url for items', async () => {
    const id = 'MEXASTIS';
    await getItem(id);
    expect(axios.get.mock.calls[0][0]).toBe(`/api/items/${id}`);
  });
  it('should get url and params for search items', async () => {
    const query = 'zapatos';
    await searchItems(query);
    expect(axios.get.mock.calls[1][0]).toBe('/api/items');
    expect(axios.get.mock.calls[1][1]).toMatchObject({ params: { q: query } });
  });
});
