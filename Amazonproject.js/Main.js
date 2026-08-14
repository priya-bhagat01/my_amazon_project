"use strict";
import {products} from '../Amazonproject.js/Data.js';
import {cart, saveStorage, addCartItems} from '../Amazonproject.js/Cart.js';
import './Data-class.js';

function renderProducts(productsToRender) {

const productsGrid = document.querySelector('.Amazon-home-page')
if (productsToRender.length === 0) {
	productsGrid.innerHTML = `
		<div class="no-products-found">
           No products matched your search.
        </div>
	`;
	return;
}

let productsHTML = '';

productsToRender.forEach((product) => {
	productsHTML += `
		<div class="main-page">
			<div class="cartItems">
				<img class="mainPageItems" src="${product.image}">
		    </div>
		    <div class="cartItemDetails">
				<p class="main-page-title limit-lines">${product.name}</p>
			</div>
			<div class="price-rating">
				<img class="ratings" src="Amazonproject.png/Rating-${(product.ratings.stars)*10}.jpg">
				<div class="rating-no">${product.ratings.count}</div>
			    <p class="screen-price">₹${product.price}</p>
			</div>
			<div class="selectItems">
				<select class="noOfItems" data-product-id="${product.id}">
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="6">6</option>
					<option value="7">7</option>
					<option value="8">8</option>
					<option value="9">9</option>
					<option value="10">10</option>
				</select>
		    </div>
		    <div class="space"></div>
		    <div class="added-message" data-product-id="${product.id}">
		        <!-- <img class="added-to-cart" src="Amazonproject.png/Checkmark.jpg">
		        Added -->
		    </div>
		    <div class="addingItems">
		    	<button class="cartButton" data-product-id="${product.id}">Add To Cart</button>
		    </div>
		</div>
	`
});

productsGrid.innerHTML = productsHTML;
attachAddToCartListeners();
}
renderProducts(products);

// Get search query from URL bar (if present)
const url = new URL(window.location.href);
const searchQuery = url.searchParams.get('search');

if (searchQuery) {
	const searchInputEl = document.querySelector('.searchButton');
	if (searchInputEl) {
		searchInputEl.value = searchQuery;
	}
	performSearch(searchQuery);
} else{
	renderProducts(products);
}

function performSearch(customSearchTerm) {
	const searchInputEl = document.querySelector('.searchButton');
	const searchTerm = (customSearchTerm !== undefined ? customSearchTerm : (searchInputEl?.value || ''))
	 .toLowerCase()
	 .trim();
	// const searchInput = (searchInputEl?.value || '').toLowerCase().trim();

	const filteredProducts = products.filter((product) => {
		const productName = product.name ? product.name.toLowerCase() : '';
		return productName.includes(searchTerm);
	});

	renderProducts(filteredProducts);
	
};


document.querySelector('.searchIcon')
 ?.addEventListener('click', () => {
 	performSearch();
 });

document.querySelector('.searchIcon')
 ?.addEventListener('keydown', (event) => {
 	if (event.key === 'Enter') {
 	performSearch();
    }
 });

document.querySelector('.searchIcon')
 .addEventListener('input', () => {
 	performSearch();
 });
// 1. Get the ID of the thing clicked.
// 2. Search the existing list to see if we already have it.
// 3. IF found     → Increase its count.
// 4. IF NOT found → Push a new object into the list.

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

function attachAddToCartListeners() {

document.querySelectorAll('.cartButton')
 .forEach((button) => {
 	button.addEventListener(('click') , () => {
 		const productId = button.dataset.productId; // Get the ID from the button's dataset

 		//Use DOM to get Added message when clicked on Add to Cart
		const message = document.querySelector(`.added-message[data-product-id="${productId}"]`);
		//Add class to message using .classList.add() then style to opacity 1
		message.innerHTML = `<img class="added-to-cart" src="Amazonproject.png/Checkmark.jpg">
		        Added`;
		message.classList.add('style-message');

		//use clearTimeout to add 2 seconds timeout for multiple clicks
		if (messageTimeouts) {
			clearTimeout(messageTimeouts);
		}

		//use setTimeout and make message disappear
		messageTimeouts = setTimeout(() => {
			message.classList.remove('style-message');
		}, 1500);

		//use DOM to get select element (noOfItems)
		//get value selected in noOfItems (use .'value' property)
		// when updating cart quantity use value instead of 1

		const selectedQuantity = document.querySelector(`.noOfItems[data-product-id="${productId}"]`); 
		//"Find the <select> with class .noOfItems whose data-product-id attribute is equal to
		const selectedValue = Number(selectedQuantity.value);

		addCartItems(productId , selectedValue);
		updateCart();
 	});
});
}