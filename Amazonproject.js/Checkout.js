"use strict";
import {products} from '../Amazonproject.js/Data.js';
import {cart, saveStorage, addCartItems} from '../Amazonproject.js/Cart.js';

//we have to make checkout at header change its value acc
//1. what data do I need?
//I need to update items in checkout as I add products to cart, [ARRAY]
//2. what calculation do I need to perform?
//I need to add number of items I put in cart, [loop through variable]
//3. where does result go in DOM
//It goes in checkout header brackets, innerHTML = ${variable}

let cartQuantity = 0;
cart.forEach((items) => {
	cartQuantity += items.quantity ;
});

document.querySelector('.no-of-items')
 .innerHTML = `${cartQuantity} items`;
//1. I need to import id quantity and products data (cart[], and products)
//2. I need to loop through cart, match productId with id of cart item,
// then I have to generate HTML for that product
//3. I need to use added-items class and display it using DOM

let cartHTML = '';

cart.forEach((cartItem) => {
	const productId = cartItem.productId;

	let matchingProduct;

	products.forEach((product) => {
		if (product.id === productId) {
			matchingProduct = product;
		};
    })
    cartHTML += `
    	<div class="item-status">
	        <div class="delivery">
	        	Delivery date: Tuesday, August 11
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
			        	<p class="freeDate">Tuesday, August 11</p>
			        	<p class="free">Free Shipping</p>
		            </div>
		            <div class="Next-delivery-date">
			        	<input type="radio" name="date-${matchingProduct.id}" class="near-day">
			        	<p class="nearDueDate">Wednesday, August 5</p>
			        	<p class="next-date">₹50 - Shipping</p>
		            </div>
		            <div class="Delivery-date">
			        	<input type="radio" name="date-${matchingProduct.id}" class="same-day"> 
			        	<!-- doesn't allow to change radio button from one product to other -->
			        	<p class="nearestDate">Monday, August 3</p>
			        	<p class="another-date">₹100 - Shipping</p>
		            </div>
		        </div>
		    </div>
	        </div>
	    </div>
    `;
});

document.querySelector('.added-products')
 .innerHTML = cartHTML;
