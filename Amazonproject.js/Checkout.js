"use strict";
import {products} from '../Amazonproject.js/Data.js';
import {cart, addCartItems} from '../Amazonproject.js/Cart.js';

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