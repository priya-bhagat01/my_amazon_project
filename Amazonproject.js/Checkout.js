"use strict";
import {products} from '../Amazonproject.js/Data.js';
import {cart, saveStorage, addCartItems, removeFromCart, updateQuantity} from '../Amazonproject.js/Cart.js';
import {calculateDeliveryDate} from './DeliveryDate.js';

//we have to make checkout at header change its value acc
//1. what data do I need?
//I need to update items in checkout as I add products to cart, [ARRAY]
//2. what calculation do I need to perform?
//I need to add number of items I put in cart, [loop through variable]
//3. where does result go in DOM
//It goes in checkout header brackets, innerHTML = ${variable}

function updateHeaderQuantity() {

	let cartQuantity = 0;

	cart.forEach((item) => {
	cartQuantity += item.quantity;
});

document.querySelector('.no-of-items')
 .innerHTML = `${cartQuantity} items`;
};

updateHeaderQuantity();


function renderCheckout() {
	let cartHTML = '';

	//1. I need to import id quantity and products data (cart[], and products)
//2. I need to loop through cart, match productId with id of cart item,
// then I have to generate HTML for that product
//3. I need to use added-items class and display it using DOM

cart.forEach((cartItem) => {
	const productId = cartItem.productId;

    let matchingProduct;
	products.forEach((product) => {
		if (product.id === productId) {
			matchingProduct = product;
		};
    })
    cartHTML += `
    	<div class="item-status cart-item-conatiner-${matchingProduct.id}">
	        <div class="delivery">
	        	Delivery date: ${calculateDeliveryDate(0)}
	        </div>
	        <div class="cart-details">
		        <div class="product-image">
		        	<img class="item-image" src="${matchingProduct.image}">
		        </div>
		    <div class="item-details">
		        <div class="product-name">
		        	${matchingProduct.name}
		        </div>
		        <div class="product-price">
		        	₹${matchingProduct.price}
		        </div>
		        <div class="product-quantity">
		        	<div class="quantity">Quantity: ${cartItem.quantity}</div>
		        	<div class="update" data-product-id="${matchingProduct.id}">Update</div>
		        	<div class="delete" data-product-id="${matchingProduct.id}">Delete</div>
		        </div>
		    </div>
		    <div class="shipping-details">
		        <div class="option">
		        	Choose a delivery option:
		        </div>
		        <div class="shipping-date">
		        	<div class="Delivery-free-date">
			        	<input type="radio" name="date-${matchingProduct.id}" class="any-day">
			        	<p class="freeDate">${calculateDeliveryDate(7)}</p>
			        	<p class="free">Free Shipping</p>
		            </div>
		            <div class="Next-delivery-date">
			        	<input type="radio" name="date-${matchingProduct.id}" class="near-day">
			        	<p class="nearDueDate">${calculateDeliveryDate(3)}</p>
			        	<p class="next-date">₹50 - Shipping</p>
		            </div>
		            <div class="Delivery-date">
			        	<input type="radio" name="date-${matchingProduct.id}" class="same-day"> 
			        	<!-- doesn't allow to change radio button from one product to other -->
			        	<p class="nearestDate">${calculateDeliveryDate(1)}</p>
			        	<p class="another-date">₹100 - Shipping</p>
		            </div>
		        </div>
		    </div>
	        </div>
	    </div>`;
    });

	document.querySelector('.added-products')
     .innerHTML = cartHTML;


	document.querySelectorAll('.delete')
	 .forEach((link) => {
		link.addEventListener('click', () => {
			const productId = link.dataset.productId;

			removeFromCart(productId);
			saveStorage();
			renderCheckout();
			updateHeaderQuantity();
		});
	});

	//1. We need to Grab all update buttons in the page using class update 
	//2. We need to add event listener click, then we need to grab product I'd with dataset property,
	// then we'll have to change innerHTML with `` and write html there for input, 
	//and save on side of that, we will also have to use function updateHeaderQuantity, 
	//3. In DOM this will go for quantity div to inc quantity or to completely disappear

	document.querySelectorAll('.update')
	 .forEach((updateButton) => {
	 	updateButton.addEventListener('click', () => {
	 	
	 	const productId = updateButton.dataset.productId;
	 	
	 	const contain = document.querySelector(`.cart-item-conatiner-${productId}`);

	 	const quantityConatiner = contain.querySelector('.product-quantity');

	 	const matchingCartItem = cart.find((item) =>
	 		item.productId === productId);

	 	quantityConatiner.innerHTML = `
	 		<div class="productQuantity">
		 		<div class="quantity">
		 		  Quantity: <input class="quantity-input-${productId} updateQuantity" type="number" value ="${matchingCartItem.quantity}" min="0">
		 		</div>
		 		<div class="saveQuantity" data-product-id="${productId}">Save</div>
				<div class="delete" data-product-id="${productId}">Delete</div>
			</div>
	 	`;

	 	const saveLink = contain.querySelector('.saveQuantity');
	 	saveLink.addEventListener('click', () => {
	 		const newQuantity = Number(document.querySelector(`.quantity-input-${productId}`).value);

	 		if (newQuantity === 0) {
	 			removeFromCart(productId);
	 			contain.remove();
	 		} else {
	 			updateQuantity(productId, newQuantity);
	 		};
	 	saveStorage();
	 	renderCheckout();
	 	updateHeaderQuantity();
	 	updateItems();
	 	});
	 	});
	});

};
renderCheckout();

function updateItems() {
	let ItemsQuantity = 0;

	cart.forEach((items) => {
		ItemsQuantity += items.quantity;
	});

document.querySelector('.itemsNo')
 .innerHTML = `Items(${ItemsQuantity})`;

saveStorage();
};
updateItems();
