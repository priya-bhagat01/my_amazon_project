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

 		const quantityToAdd = Number(selectedValue)	|| 1
 		if (matchingItem) {
 			matchingItem.quantity += quantityToAdd ;
 		} else {
 			cart.push({
 				productId: productId, 
 				quantity: quantityToAdd,
 				deliveryOptionId: '1'
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

export function resetCart() {
	cart = [];
	saveStorage();
};
