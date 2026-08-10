import {products} from '../Amazonproject.js/Data.js';
import {cart, saveStorage, addCartItems, removeFromCart, updateQuantity} from '../Amazonproject.js/Cart.js';
import {deliveryOptions} from './DeliveryDate.js'
export function updateItems() {
	let ItemsQuantity = 0;

	cart.forEach((items) => {
		ItemsQuantity += items.quantity;
	});

document.querySelector('.itemsNo')
 .innerHTML = `Items(${ItemsQuantity}):`;

saveStorage();
};

//loop through products
//Get product id from cart
//Get product price from products
//Multiply products price with cart quantity and put price using DOM

export function cartItemPrice() {
	let productPrice = 0;

	cart.forEach((cartItem) => {
		const productId = cartItem.productId;
		const cartItemQuantity = cartItem.quantity;

		let matchingProduct;

		products.forEach((product) => {
			if (product.id === productId) {
				matchingProduct = product
			};
		});

		if (matchingProduct) {
			productPrice += matchingProduct.price*cartItemQuantity;
		}
	});

	document.querySelector('.itemsPrice')
     .innerHTML = `₹${productPrice}`;
    return productPrice;
};

export function cartShippingPrice() {
	let shippingFee = 0;

	cart.forEach((cartItem) => {
		const productId = cartItem.productId;
		const deliveryOptionId = cartItem.deliveryOptionId;

		const deliveryOption = deliveryOptions.find(option => option.id === deliveryOptionId);

		if (deliveryOption) {
			shippingFee += deliveryOption.price;
		}
	});

	document.querySelector('.shippingPrice')
	 .innerHTML = `₹${shippingFee}`;
	return shippingFee;
};

export function updateTotalBeforeTax() {
	const itemTotal = cartItemPrice();
	const shippingTotal = cartShippingPrice();

	const totalBeforeTax = itemTotal + shippingTotal;

	document.querySelector('.rawTotalPrice')
	 .innerHTML = `₹${totalBeforeTax}`;
	return totalBeforeTax;
};

export function calculateTax() {
	const totalBeforeTax = updateTotalBeforeTax();
	const tax = totalBeforeTax * 0.1;

	document.querySelector('.taxPrice')
	 .innerHTML = `₹${tax.toFixed(2)}`;
	return tax;
};