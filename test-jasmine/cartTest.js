import {cart, addCartItems} from '../Amazonproject.js/Cart.js';

describe('test suite: addToCart', () => {

	it('adds existing product to cart', () => {
	});

	it('adds new product to cart', () => {
		addCartItems('bd984d2f-fecc-44b1-8eb6-bfb966f3b986');
		expect(cart.length).toEqual(1);
	});
});