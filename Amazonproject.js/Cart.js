export const cart =[];

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
}