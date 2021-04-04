import React from 'react';
import { shallow } from 'enzyme';
import 'babel-polyfill';
import Checkout from './checkout.component';

const CHEKCKOUT = {
  'id': 'MLA680573238',
  'title': 'Zapato Vulcano',
  'price': {
    'currency': 'ARS',
    'amount': 2199,
    'decimals': 2,
  },
  'picture': 'http://http2.mlstatic.com/D_645465-MLA31037702912_062019-O.jpg',
  'condition': 'new',
  'free_shipping': false,
  'sold_quantity': 2676,
  'description': 'ESTAMOS ENVIANDO CON NORMALIDAD!!!!!!!\n\n\nArt. 900 en color TOSTADO, NEGRO, AZUL y NATURAL\nNos dedicamos a la elaboración de zapatos masculinos, modelos clásicos, con el fin de brindar elegancia y comodidad.\nTambién vendemos por MAYOR\nPodes retirar en nuestro showroom en devoto de miércoles a viernes.\nMiércoles a viernes de 16hs a 20hs\n\n\nMERCADOLIDER PLATINUM',
};

describe('Checkout Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Checkout {...CHEKCKOUT} />);
  });

  it('should render Checkout component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the component titles and conditions', () => {
    expect(wrapper.find("[className='checkout__condition']").text()).toBe('new -2676 vendidos');
    expect(wrapper.find("[className='checkout__title']").text()).toBe(CHEKCKOUT.title);
  });

});
