"use strict";
import {products} from './Data.js';
import {deliveryOptions, calculateDeliveryDate} from './DeliveryDate.js';
import {orders, addOrder} from './OrderDetails.js'
import {cart, saveStorage, addCartItems, removeFromCart, updateQuantity, resetCart} from '../Amazonproject.js/Cart.js';
import {updateItems, cartItemPrice, cartShippingPrice, updateBillSummary} from './CheckoutBill.js';

//Gets full current web address of page
const url = new URL(window.location.href);

//Grabs the value attached to 'orderId'
const orderId = url.searchParams.get('orderId');

//Grabs the value attached to 'productId'
const productId = url.searchParams.get('productId');

const order = orders.find(order => order.id === orderId);
const productItem = order.items.find(item => item.productId === productId);
const matchingProduct = products.find(product => product.id === productId);
const deliveryOption = deliveryOptions.find(option => option.id === productItem.deliveryOptionId) || deliveryOptions[0];
const dateString = calculateDeliveryDate(deliveryOption.deliveryDays);

const trackingHTML = `
	<div class="view-orders">
			<a class="order-page" href="orders.html">
				View all orders
			</a>
		</div>

		<div class="order-details">
			<div class="arriving-date">
				<p>Arriving on ${dateString}</p>
			</div>
			<div class="order-name">
				<p>${matchingProduct.name}</p>
			</div>
			<div class="order-quantity">
				<p>Quantity: ${productItem.quantity}</p>
			</div>
			<div class="order-image">
				<img class="placed-order-image" src="${matchingProduct.image}">
			</div>
			<div class="Progress-bar-head">
				<div class="left-section">
					<p>Preparing</p>
				</div>
				<div class="mid-section">
					<p>Shipped</p>
				</div>
				<div class="right-section">
					<p>Delivered</p>
				</div>
			</div>
			<div class="Progress-bar-container">
				<div class="Progress-bar"></div>
			</div>
		</div>
`;
document.querySelector('.main')
 .innerHTML = trackingHTML;
 
function updateCart() {
	let cartQuantity = 0;

 		cart.forEach((cartItem) => {
 			cartQuantity += cartItem.quantity;
 		});

 		document.querySelector('.cartCount')
 		 .innerHTML = cartQuantity;
 	};

updateCart();