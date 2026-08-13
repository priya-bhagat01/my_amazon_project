"use strict";
import {products} from './Data.js';
import {deliveryOptions, calculateDeliveryDate} from './DeliveryDate.js';
import {orders, addOrder} from './OrderDetails.js'
import {cart, saveStorage, addCartItems, removeFromCart, updateQuantity, resetCart} from '../Amazonproject.js/Cart.js';
import {updateItems, cartItemPrice, cartShippingPrice, updateBillSummary} from './CheckoutBill.js';

function placedOrderItems() {
	let orderHTML = `
			<div class="titlePara">
				<p class="para">Your Orders</p>
			</div>`;

	orders.forEach((order) => {
		let productListHTML = '';

		const orderId = order.id;
		const orderTime = order.orderTime;
		const totalCost = order.totalCost;

		const formattedOrderTime = new Date(order.orderTime).toLocaleDateString('en-US', {
			month: 'long',
			day: 'numeric'
		});

		order.items.forEach((cartItem) => {
			const matchingProduct = products.find(product => product.id === cartItem.productId);

		    const deliveryOptionId = cartItem.deliveryOptionId;
			const deliveryOption = deliveryOptions.find(option => option.id === deliveryOptionId) || deliveryOptions[0];
			const dateString = calculateDeliveryDate(deliveryOption.deliveryDays);

			productListHTML += `

				<div class="order-placed-details">
					<div class="imageContainer">
						<img class="product-image" src="${matchingProduct.image}">
					</div>

					<div class="order-details">
						<div class="order-name">
							<p>${matchingProduct.name}</p>
						</div>
						<div class="order-date">
							<p>Arriving on: ${dateString}</p>
						</div>
						<div class="order-quantity">
							<p>Quantity: ${cartItem.quantity}</p>
						</div>
						<div class="added-message" data-product-id="${matchingProduct.id}">
					    </div>
						<div class="buy-again">
							<button class="BuyAgainButton" data-product-id="${matchingProduct.id}">
								<div class="buyImage">
									<img src="Amazonproject.png/BuyAgain.jpg" class="BuyAgainImage">
								</div>
								<div class="BuyAgainPara" data-product-id="${matchingProduct.id}">
									Buy it again
								</div>
							</button>
						</div>
					</div>
					<a href = "tracking.html?orderId=${order.id}&productId=${matchingProduct.id}"> 
						<!-- the code after ? finds which product track was clicked-->
						<div class="track-order">
							<button class="tracking-package">
								<p class="tracking-para">Track package</p>
							</button>
						</div>
					</a>
				</div>`;
		});

		orderHTML += 
		`
			<div class="order-container">
				<div class="order-head">
					<div class="left-section">
						<div class="order-placed">
							<p class="order-status">Order Placed: </p>
							<p class="order-placed-date">${formattedOrderTime}</p>
					    </div>
					    <div class="bill">
							<p class="total-bill">Total: </p>
							<p class="total-price">₹${totalCost}</p>
						</div>
					</div>
					<div class="right-section">
						<p class="order-placed-id">Order ID: </p>	
					    <p class="order-placed-uid">${orderId}</p>
					</div>
				</div>
			`
			 + productListHTML 
			 + `</div>`;
		});

	document.querySelector('.main')
	 .innerHTML = orderHTML;
};
placedOrderItems();

let messageTimeouts;

function updateCart() {
	let cartQuantity = 0;

 		cart.forEach((cartItem) => {
 			cartQuantity += cartItem.quantity;
 		});

 		document.querySelector('.cartCount')
 		 .innerHTML = cartQuantity;
 	};

updateCart();

document.querySelectorAll('.BuyAgainButton')
 .forEach((button) => {
 	button.addEventListener('click', () => {
 		const productId = button.dataset.productId;

 		const message = document.querySelector(`.added-message[data-product-id="${productId}"]`);

 		message.innerHTML = `<img class="added-to-cart" src="Amazonproject.png/Checkmark.jpg">
		        Added`;
		message.classList.add('style-message');

		if (messageTimeouts) {
			clearTimeout(messageTimeouts);
		}

		messageTimeouts = setTimeout(() => {
			message.classList.remove('style-message');
		}, 1500);

 		addCartItems(productId);
 		updateCart();
 	});
 	
 });