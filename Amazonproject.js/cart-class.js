class Cart {
	cartItems;
	#lockStorageKey; //Makes this property private

	constructor(lockStorageKey) {			
		this.#lockStorageKey = lockStorageKey;
		this.#loadFromStorage();
	}

	#loadFromStorage() {
		this.cartItems = JSON.parse(localStorage.getItem(this.#lockStorageKey)) || []
	}

	saveStorage() {
		localStorage.setItem(this.#lockStorageKey, JSON.stringify(this.cartItems));
	}

	addCartItems(productId , selectedValue) {
	 	let matchingItem; 

 		this.cartItems.forEach((cartItem) => {	// Loop through cart to find if it already exists
	 		if (productId === cartItem.productId) {
	 			matchingItem = cartItem;
	 		};
 		});

 		const quantityToAdd = Number(selectedValue)	|| 1
 		if (matchingItem) {
 			matchingItem.quantity += quantityToAdd ;
 		} else {
 			this.cartItems.push({
 				productId: productId, 
 				quantity: quantityToAdd,
 				deliveryOptionId: '1'
 			});
 		}
 	this.saveStorage();
	}

	removeFromCart(productId) {
		const newCart = [];

		this.cartItems.forEach((cartItem) => {
			if (cartItem.productId !== productId) {
				newCart.push(cartItem);
			};
		});

	this.cartItems = newCart;
	this.saveStorage();
	}

	updateQuantity(productId, newQuantity) {
		this.cartItems.forEach((cartItem) => {
			if (cartItem.productId === productId) {
				cartItem.quantity = newQuantity;
			}
		});
	this.saveStorage();
	}

	resetCart() {
		this.cart = [];
	this.saveStorage();
	}
}

const cart = new Cart('cart-oop');
const businessCart = new Cart('cart-business');

cart.addCartItems('909a2614-fcc9-4dfe-b247-470dfdeecd1e');
cart.addCartItems('76647a83-5685-4be8-b143-4d502dc0b6d7');
businessCart.addCartItems('76647a83-5685-4be8-b143-4d502dc0b6d7');

console.log(cart);
console.log(businessCart);