export let cart = JSON.parse(localStorage.getItem('cart')) || [];

export function saveStorage() {
	localStorage.setItem('cart', JSON.stringify(cart));
};

export function addCartItems(productId , selectedValue) {
	 	let matchingItem; 

 		cart.forEach((cartItem) => {	// Loop through cart to find if it already exists
	 		if (productId === cartItem.productId) {
	 			matchingItem = cartItem;
	 		};
 		});

 		if (matchingItem) {
 			matchingItem.quantity += selectedValue ;
 		} else {
 			cart.push({
 				productId: productId, 
 				quantity: selectedValue
 			});
 		}
 	saveStorage();
}

export function removeFromCart(productId) {
	const newCart = [];

	cart.forEach((cartItem) => {
		if (cartItem.productId !== productId) {
			newCart.push(cartItem);
		};
	});

	cart = newCart;
	saveStorage();
};

export function updateQuantity(productId, newQuantity) {
	cart.forEach((cartItem) => {
		if (cartItem.productId === productId) {
			cartItem.quantity = newQuantity;
		}
	});
	saveStorage();
};